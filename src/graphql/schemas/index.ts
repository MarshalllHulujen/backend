import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { historyTypeDefs } from "./history-schema";
import { userTypeDefs } from "./user-schema";

export const typeDefs = mergeTypeDefs([userTypeDefs, historyTypeDefs]);
