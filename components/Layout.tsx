import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="bg-stone-200 text-stone-800 min-h-screen flex flex-col p-8">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,200..900&display=swap" rel="stylesheet" />
    </Head>

    <header className="p-16 py-4 flex stretch-content items-center">
      <Link href="/" className="flex justify-center items-center text-warm-stone-900">
        <Image src="/husk-logo-footer.svg" width="32" height="32" alt="Husk" />
        <span className="text-2xl text-stone-900 font-serif ml-1 mt-1 font-semibold">Husk</span> 
      </Link>
    </header>

    <main className="flex-1">{children}</main>

    <footer className="flex flex-col md:flex-row justify-between items-center text-stone-700 text-sm font-light p-16 py-4">
      <div className="flex items-center gap-3 text-stone-400">
        <Link href="/" className="opacity-25 hover:opacity-50">
          <Image src="/husk-logo-footer.svg" width="28" height="28" alt="Husk" />
        </Link>
        <span>&copy; {new Date().getFullYear()} Husk, LLC.</span>
      </div>
      <div className="space-x-4">
        <Link className="text-stone-500 hover:text-stone-900" href="/">Home</Link>
        <Link className="text-stone-500 hover:text-stone-900" href="/about">About</Link>
        <Link className="text-stone-500 hover:text-stone-900" href="mailto:hello@husk.co">Support</Link>
        <Link className="text-stone-500 hover:text-stone-900" href="/legal/return-policy">Return Policy</Link>
        <Link className="text-stone-500 hover:text-stone-900" href="/legal/privacy-policy">Privacy Policy</Link>
        <Link className="text-stone-500 hover:text-stone-900" href="/legal/terms-of-service">Terms of Service</Link>
      </div>
    </footer>
  </div>
);

export default Layout;
