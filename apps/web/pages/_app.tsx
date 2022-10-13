/* eslint-disable turbo/no-undeclared-env-vars*/
import type { AppProps } from "next/app";
import { trpc } from "../util/trpc";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default trpc.withTRPC(MyApp);
