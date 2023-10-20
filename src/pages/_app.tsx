import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import {
  ClerkProvider,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className="flex justify-center mt-5">
      <div className="h-full w-full md:max-w-3xl">
        <ClerkProvider {...pageProps}>
          <SignedIn>
            <UserButton />
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <SignIn />
          </SignedOut>
        </ClerkProvider>
      </div>
    </main>
  );
};

export default api.withTRPC(MyApp);
