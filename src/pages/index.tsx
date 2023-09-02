import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import NavbarLayouts from "@/components/Layouts/Navbar/NavbarLayouts";
import HeroLayout from "@/components/Layouts/Hero/HeroLayout";
import AboutLayout from "@/components/Layouts/About/AboutLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ngoding santuy | your success</title>
      </Head>
      <div className="bg-white">
        <NavbarLayouts />
        <HeroLayout />
        <AboutLayout />
      </div>
    </>
  );
}
