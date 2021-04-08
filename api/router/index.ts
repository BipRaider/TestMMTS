'use strict';
import userRouter from '../modules/users/router/user.router';

export default server => {
   server.set('views engine', 'hbs');
   server.engine('html', require('hbs').__express);
   server.use('/api', userRouter);
};
