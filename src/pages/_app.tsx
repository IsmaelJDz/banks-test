import "../styles/globals.css";

import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { ReactElement, ReactNode } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { GlobalProvider } from "@/context/global";

const queryClient = new QueryClient();

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type AppPropsWithLayout = AppProps & {
  children: ReactNode | ReactElement;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
