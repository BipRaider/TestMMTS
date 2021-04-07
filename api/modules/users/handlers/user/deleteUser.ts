'use strick';

import { TErorr } from 'api/types/types';
import { TId, TUserDB } from '../../types/types';

import User from '../../model';

export default async ({ id }: TId): Promise<void> => {
   try {
      const user: TUserDB = await User.findByPk(id);

      if (!user) {
         const err: TErorr = new Error(`Is't found user`);
         err.code = 404;
         throw err;
      }

      await User.destroy({ where: { id: id } });
   } catch (error) {
      throw error;
   }
};
