/* eslint-disable turbo/no-undeclared-env-vars*/
import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "api";
import { httpBatchLink } from "@trpc/client";
import { devtoolsLink } from "trpc-client-devtools-link";

function getBaseUrl() {
  return "http://localhost:4000";
}

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        devtoolsLink({
          // `enabled` is true by default
          // If you want to use the devtools extension just for development, do the following
          //enabled: process.env.NODE_ENV === "development",
        }),
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://trpc.io/docs/ssr
           **/
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      /**
       * @link https://react-query-v3.tanstack.com/reference/QueryClient
       **/
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   **/
  ssr: true,
});
