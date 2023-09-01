import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavbarLayouts from "@/components/Layouts/Navbar/NavbarLayouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavbarLayouts />
      <Component {...pageProps} />
    </>
  );
}
