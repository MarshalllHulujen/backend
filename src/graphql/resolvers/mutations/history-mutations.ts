import { createHistory } from "@/services/history-service";

export const historyMutations = {
  createHistory: (
    _: unknown,
    { title, userId }: { title: string; userId: string }
  ) => createHistory({ title, userId }),
};
