import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="bg-neutral-100 min-h-screen flex flex-col">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,200..900&display=swap" rel="stylesheet" />
    </Head>

    <header className="px-12 py-8 flex stretch-content items-center">
      <Link href="/" className="flex justify-center items-center">
        <Image src="/husk-logo-footer.svg" width="32" height="32" alt="Husk" />
        <span className="text-2xl font-serif ml-1 mt-1 font-semibold">Husk</span> 
      </Link>
      <nav className="flex-1 text-right">
        <Link href="/about">About</Link>
      </nav>
    </header>

    <main className="flex-1">{children}</main>

    <footer className="px-12 py-8 flex stretch-content items-center text-neutral-500 text-xs font-medium">
      <div className="space-x-4 flex-1">
        <span>Made by your friends in Colorado</span>
        <span>&copy; Husk, LLC</span>
      </div>
      <Link href="/">
        <Image src="/../husk-logo-footer.svg" width="36" height="36" alt="Husk" />
      </Link>
      <div className="space-x-4 flex-1 text-right">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </footer>
  </div>
);

export default Layout;
