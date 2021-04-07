'use strick';

import { TUser } from '../../types/types';

import User from '../../model';

export default async (): Promise<TUser[]> => {
   try {
      const listCategory: TUser[] = await User.findAll({ raw: true });

      return listCategory;
   } catch (error) {
      throw error;
   }
};
