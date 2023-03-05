export type LoginReq = {
  email: string;
  password: string;
};

export type SignInReq = LoginReq & {
  name: string;
};

export type Response = {
  userExists: boolean;
  id?: number;
};
