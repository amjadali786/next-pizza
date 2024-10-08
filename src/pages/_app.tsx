/* eslint-disable @typescript-eslint/no-explicit-any */

import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import { CartProvider } from "@/utils/ContextReducer";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: any) {
  return (
    <ThemeProvider attribute="class">
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ThemeProvider>
  );
}