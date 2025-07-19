import Layout from "./Layout";
import Section from "./Section";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const tabs = [
  { name: "Return Policy", slug: "return-policy" },
  { name: "Privacy Policy", slug: "privacy-policy" },
  { name: "Terms of Service", slug: "terms-of-service" }
];

interface LegalPageWrapperProps {
  children: ReactNode;
}

const LegalPageWrapper = ({ children }: LegalPageWrapperProps) => {
  const router = useRouter();
  const currentSlug = router.pathname.split('/').pop();

  return (
    <Layout title="Legal | Husk">
      <Section>
        <h1 className="mb-4">
          Legal policies
        </h1>
        
        <div className="flex flex-col">
          <div className="relative flex mt-4 -ml-2 mb-24">
            <div className="flex -gap-4 relative">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  href={`/legal/${tab.slug}`}
                  className={`relative z-10 px-4 py-1.5 rounded-full text-sm font-medium focus:outline-none text-stone-500 hover:text-stone-700 ${
                    currentSlug === tab.slug ? 'text-black bg-stone-300' : ''
                  }`}
                >
                  {tab.name}
                </Link>
              ))}
            </div>
          </div>
          {children}
        </div>
      </Section>
    </Layout>
  );
};

export default LegalPageWrapper;