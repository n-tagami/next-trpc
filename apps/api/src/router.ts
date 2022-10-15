import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { UserName } from "shared-types";

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        name: UserName,
        message: z.string(),
      })
    )
    .query(({ input }) => {
      return { name: input.name, message: `Hello ${input.name}` };
    }),
});

export type AppRouter = typeof appRouter;
