import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./router";
import express from "express";
import cors from "cors";

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
//type Context = inferAsyncReturnType<typeof createContext>;

const app = express();
app.use(cors());
app.use(
  "/api/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

if (import.meta.env.PROD){
  app.listen(4000)
}

export const viteNodeApp = app