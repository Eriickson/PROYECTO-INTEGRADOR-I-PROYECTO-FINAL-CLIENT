import React from "react";
import Router /*  { useRouter } */ from "next/router";
import "tailwindcss/tailwind.css";
import "swiper/swiper.min.css";
import "@/css/globals.css";

// Bar-Progress
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "src/store";

import { Provider as NextAuthProvider } from "next-auth/client";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
Router.events.on("routeChangeComplete", () => window.scrollTo(0, 0));
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  // const route = useRouter();

  if (typeof window !== "undefined") {
    window.addEventListener("beforeunload", () => {
      // Cancel the event as stated by the standard.
      // event.preventDefault();
      // Chrome requires returnValue to be set.
      // event.returnValue = "Hola a todo el que quiere cerrar";

      sessionStorage.removeItem("example");
    });
  }

  // function addRouteSessionStorage() {
  //   if (typeof window !== "undefined") {
  //     const previousRoutesString = sessionStorage.getItem("previousRoutes");
  //     let newPreviousRoutes: string[] = [];

  //     if (previousRoutesString) {
  //       newPreviousRoutes = JSON.parse(previousRoutesString);
  //     }

  //     newPreviousRoutes = newPreviousRoutes.push("");

  //     console.log(newPreviousRoutes);
  //   }
  // }

  // useEffect(() => {
  //  addRouteSessionStorage();
  // }, [route]);

  return (
    <NextAuthProvider session={pageProps.session}>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
