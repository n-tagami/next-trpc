import { initTRPC } from "@trpc/server";
import { ZodError } from "zod";

const t = initTRPC.create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.code === "BAD_REQUEST" && error.cause instanceof ZodError
            ? error.cause.flatten()
            : null,
      },
    };
  },
});

// We explicitly export the methods we use here
// This allows us to create reusable & protected base procedures
export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
