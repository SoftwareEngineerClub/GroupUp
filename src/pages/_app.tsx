import { type AppType } from "next/dist/shared/lib/utils";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import { Navbar } from "~/components/navbar";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
