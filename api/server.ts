'use strict';
import path from 'path';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import hbs from 'hbs';

import config from './config';
import { connectionUsersDB } from './data';
import { TErorr } from './types/types';
import router from './router';

hbs.registerPartials(path.join(__dirname, '../views/partials'));

export default class BeckEND {
   server: any;

   constructor() {
      this.server = null;
   }

   async start() {
      await this.initDB();
      this.initServer();
      this.initLogger();
      this.initMiddlewares();
      this.initRoutes();

      return this.startListening();
   }

   initServer() {
      this.server = express();
   }

   initLogger() {
      this.server.use(morgan('dev'));
   }

   initMiddlewares() {
      this.server.use(express.urlencoded());
      this.server.use(express.json());
      this.server.use(cors({ origin: config.corsUrl }));
      this.server.disable('x-powered-by');
   }

   initRoutes() {
      router(this.server);

      this.server.use((req, res, next) => {
         const error: TErorr = new Error('Resource not found');
         error.code = 404;
         next(error);
      });

      this.server.use((err, req, res, next) => {
         const code = err.code || err.status || 500;
         const message = err.message || 'Internal Server Error';
         return res.status(code).json({ message });
      });
   }

   async initDB() {
      try {
         await connectionUsersDB.sync();
      } catch (error) {
         process.exit(1);
      }
   }

   startListening() {
      return this.server.listen(config.port, () => {
         console.log('\x1b[36m%s\x1b[0m', `>>> Server started listening on port ${config.port}`);
      });
   }
}
