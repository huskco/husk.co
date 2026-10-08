import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

const siteUrl = "https://husk.co";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  image?: string;
};

const Layout = ({
  children,
  title = "Husk",
  description = "Husk is a tiny creative studio making thoughtful things for curious minds.",
  image = "/og-image.jpg",
}: Props) => {
  const { asPath } = useRouter();
  const url = `${siteUrl}${asPath.split(/[?#]/)[0]}`;

  return (
    <div className="bg-stone-200 text-stone-800 min-h-screen flex flex-col p-4 sm:p-8">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Husk" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${siteUrl}${image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,200..900&display=swap" rel="stylesheet" />
      </Head>
  
      <header className="px-2 sm:px-16 py-4 flex stretch-content items-center">
        <Link href="/" className="flex justify-center items-center text-warm-stone-900">
          <Image src="/husk-logo-footer.svg" width="32" height="32" alt="Husk" />
          <span className="text-2xl text-stone-900 font-serif ml-1 mt-1 font-semibold">Husk</span> 
        </Link>
      </header>
  
      <main className="flex-1">{children}</main>
  
      <footer className="flex flex-col md:flex-row gap-4 justify-between items-center text-stone-700 text-sm font-light px-2 sm:px-16 py-4">
        <div className="flex items-center gap-3 text-stone-500">
          <Link href="/" className="opacity-40 hover:opacity-60">
            <Image src="/husk-logo-footer.svg" width="28" height="28" alt="Husk" />
          </Link>
          <span>&copy; {new Date().getFullYear()} Husk, LLC.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <Link className="text-stone-500 hover:text-stone-900" href="/">Home</Link>
          <Link className="text-stone-500 hover:text-stone-900" href="/about">About</Link>
          <a className="text-stone-500 hover:text-stone-900" href="mailto:hello@husk.co">Support</a>
          <Link className="text-stone-500 hover:text-stone-900" href="/legal/return-policy">Return Policy</Link>
          <Link className="text-stone-500 hover:text-stone-900" href="/legal/privacy-policy">Privacy Policy</Link>
          <Link className="text-stone-500 hover:text-stone-900" href="/legal/terms-of-service">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
