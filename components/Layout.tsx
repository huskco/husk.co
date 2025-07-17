import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="bg-stone-200 text-stone-800 min-h-screen flex flex-col">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,200..900&display=swap" rel="stylesheet" />
    </Head>

    <header className="p-16 flex stretch-content items-center">
      <Link href="/" className="flex justify-center items-center text-warm-stone-900">
        <Image src="/husk-logo-footer.svg" width="32" height="32" alt="Husk" />
        <span className="text-2xl text-stone-900 font-serif ml-1 mt-1 font-semibold">Husk</span> 
      </Link>
    </header>

    <main>{children}</main>

    <footer className="flex flex-col md:flex-row stretch-content items-center text-stone-700 text-sm font-light p-16">
      <div className="space-x-4 flex-1">
        <Link className="text-stone-500 hover:text-stone-900" href="/">Home</Link>
        <Link className="text-stone-500 hover:text-stone-900" href="/about">About</Link>
        <Link className="text-stone-500 hover:text-stone-900" href="/legal">Legal</Link>
        <Link className="text-stone-500 hover:text-stone-900" href="/legal/return-policy">Return Policy</Link>
        <Link className="text-stone-500 hover:text-stone-900" href="/legal/privacy-policy">Privacy Policy</Link>
        <Link className="text-stone-500 hover:text-stone-900" href="/legal/terms-of-service">Terms of Service</Link>
        <Link className="text-stone-500 hover:text-stone-900" href="mailto:hello@husk.co">hello@husk.co</Link>
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
