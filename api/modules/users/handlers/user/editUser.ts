'use strick';

import { TErorr } from 'api/types/types';
import { TUser, TUserDB } from '../types/types';

const User = require('../../model');

export default async ({ name, age, id }: TUser): Promise<void> => {
   try {
      const user: TUserDB = await User.findByPk(id);

      if (!user) {
         const err: TErorr = new Error(`Is't found user`);
         err.code = 404;
         throw err;
      }

      await User.update(
         {
            name,
            age,
         },
         {
            where: { id },
         },
      );
   } catch (error) {
      throw error;
   }
};
