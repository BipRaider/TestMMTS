'use strict';

import { TErorr } from 'api/types/types';
import { TCreatUser } from '../types/types';

const User = require('../../model');

export default async ({ name, age }: TCreatUser): Promise<void> => {
   try {
      if (name === undefined && age === undefined) {
         const err: TErorr = new Error('You could not register your user');
         err.code = 409;
         throw err;
      }

      await User.create({ name, age });
   } catch (error) {
      throw error;
   }
};
