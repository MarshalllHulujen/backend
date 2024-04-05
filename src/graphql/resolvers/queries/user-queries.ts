import { getUser, getUsers } from "@/services/user-service";

export const userQueries = {
  getUsers: () => getUsers(),
  getUser: (
    _: unknown,
    { input }: { input: { email: string; password: string } }
  ) => getUser(input),
};
