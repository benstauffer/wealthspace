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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState } from "react";
import { trpc } from "../utils/api";
import SuperJSON from "superjson";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
      transformer: SuperJSON,
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <main className="">
          <div className="">
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
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default api.withTRPC(MyApp);
