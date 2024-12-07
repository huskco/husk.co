import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="bg-stone-200 text-stone-800 min-h-screen flex flex-col p-8 pt-24">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,200..900&display=swap" rel="stylesheet" />
    </Head>

    <header className="fixed top-0 left-0 right-0 p-12 py-8 flex stretch-content items-center z-50">
      <Link href="/" className="flex justify-center items-center">
        <Image src="/husk-logo-footer.svg" width="32" height="32" alt="Husk" />
        <span className="text-2xl font-serif ml-1 mt-1 font-semibold">Husk</span> 
      </Link>
    </header>

    <main className="flex-1">{children}</main>

    <footer className="flex flex-col md:flex-row stretch-content items-center text-stone-700 text-sm font-light mt-8">
      <div className="space-x-4 flex-1">
        <Link className="hover:text-warm-stone-900" href="/">Home</Link>
        <Link className="hover:text-warm-stone-900"  href="/about">About</Link>
        <Link className="hover:text-warm-stone-900"  href="mailto:hello@husk.co">hello@husk.co</Link>
      </div>
      <Link href="/" className="hidden md:block opacity-25">
        <Image src="/husk-logo-footer.svg" width="36" height="36" alt="Husk" />
      </Link>
      <div className="space-x-4 flex-1 md:text-right">
        &copy; Husk, LLC
      </div>
    </footer>
  </div>
);

export default Layout;
