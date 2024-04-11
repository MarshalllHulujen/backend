import { createHistory } from "@/services/history-service";

export const historyMutations = {
  createHistory: (
    _: unknown,
    { title, userId, link }: { title: string; userId: string; link: string }
  ) => createHistory({ title, userId, link }),
};
