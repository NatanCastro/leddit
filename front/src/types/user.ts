export type user = {
  id: number;
  name: string;
  email: string;
  password: string;
  verified: number;
  validation_time: Date | null;
};
