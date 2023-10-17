import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider, SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
          <UserButton />
          <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
          <SignIn />
      </SignedOut>

    </ClerkProvider>
  );
}

export default api.withTRPC(MyApp);
