import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";

export const createHistory = async ({
  title,
  userId,
}: {
  title: string;
  userId: string;
}) => {
  const result = await prisma.history.create({
    data: {
      title,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  return result;
};

export const getHistory = async (userId: string) => {
  try {
    const result = await prisma.history.findMany({ where: { userId: userId } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};
