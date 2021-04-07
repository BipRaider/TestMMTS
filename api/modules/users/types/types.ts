export type TId = {
   id: string;
};

export type TUser = {
   id: number;
   name: string;
   age: number;
};

export type TUserDB = {
   dataValues: { id: 34; name: 'wqe'; age: 3 };
   _previousDataValues?: {};
   _changed?: {};
   _options?: {};
   isNewRecord?: false;
};

export type TCreatUser = {
   name: string;
   age: string;
};
