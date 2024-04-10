import { userQueries } from "./queries/user-queries";
import { userMutations } from "./mutations/user-mutations";
import { historyQueries } from "./queries/history-queries";
import { historyMutations } from "./mutations/history-mutations";

export const resolvers = {
  Query: {
    ...userQueries,
    ...historyQueries,
  },
  Mutation: {
    ...userMutations,
    ...historyMutations,
  },
};
