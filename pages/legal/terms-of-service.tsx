import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import ReturnPolicy from "../../components/legal/ReturnPolicy";
import PrivacyPolicy from "../../components/legal/PrivacyPolicy";
import TermsOfService from "../../components/legal/TermsOfService";
import { useRef, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";

const tabs = [
  { name: "Return Policy", slug: "return-policy" },
  { name: "Privacy Policy", slug: "privacy-policy" },
  { name: "Terms of Service", slug: "terms-of-service" }
];

const tabClass =
  "relative z-10 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none " +
  "text-stone-500 data-[hover]:text-stone-700 data-[selected]:text-black";

const TermsOfServicePage = () => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(2);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const highlightRef = useRef<HTMLDivElement>(null);
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const node = tabRefs.current[selectedIndex];
    if (node) {
      const parent = node.parentElement;
      const parentRect = parent?.getBoundingClientRect();
      const rect = node.getBoundingClientRect();
      if (parentRect) {
        setHighlightStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    }
  }, [selectedIndex]);

  const handleTabChange = (index: number) => {
    setSelectedIndex(index);
    router.push(`/legal/${tabs[index].slug}`);
  };

  return (
    <Layout title="Terms of Service | Husk">
      <Section>
        <h1 className="mb-4">
          Legal policies
        </h1>
        
        <div className="flex flex-col items-center">
          <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange}>
            <div className="relative flex mt-4 -ml-2 mb-24">
              <TabList className="flex -gap-4 relative">
                <div
                  ref={highlightRef}
                  className="absolute top-1 left-0 h-[calc(100%-0.5rem)] bg-stone-300 rounded-full transition-all duration-300 z-0"
                  style={{
                    width: `${highlightStyle.width}px`,
                    left: `${highlightStyle.left}px`,
                  }}
                />
                {tabs.map((tab, idx) => (
                  <Tab
                    key={tab.name}
                    className={tabClass}
                    ref={el => (tabRefs.current[idx] = el)}
                  >
                    {tab.name}
                  </Tab>
                ))}
              </TabList>
            </div>
            <TabPanels>
              <TabPanel>
                <ReturnPolicy />
              </TabPanel>
              <TabPanel>
                <PrivacyPolicy />
              </TabPanel>
              <TabPanel>
                <TermsOfService />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </Section>
    </Layout>
  );
};

export default TermsOfServicePage;