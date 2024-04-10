import { getHistory } from "@/services/history-service";

export const historyQueries = {
  getHistory: (_: unknown, { userId }: { userId: string }) =>
    getHistory(userId),
};
