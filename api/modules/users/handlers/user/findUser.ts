'use strick';

import { TErorr } from 'api/types/types';
import { TId, TUser } from '../../types/types';

import User from '../../model';

export default async ({ id }: TId): Promise<TUser> => {
   try {
      const user: TUser = await User.findOne({ where: { id: id }, raw: true });

      if (!user) {
         const err: TErorr = new Error(`Is't found user`);
         err.code = 404;
         throw err;
      }

      return user;
   } catch (error) {
      throw error;
   }
};
