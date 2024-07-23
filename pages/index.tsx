import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import Section from "../components/Section";
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Section>
      <h1 className='text-3xl font-serif mb-12'>Small projects from Joshua & Lesley Ogle</h1>

      <div className="flex justify-center items-center mb-8 bg-white py-8 px-16 rounded-3xl shadow-xl text-neutral-700">
        <div className="flex-1 text-center">
          <Image src="/existential-chicken-logo.svg" width="64" height="64" alt="Existential Chicken Logo" className="mx-auto mb-4" />
          <h2 className="text-6xl font-bold font-serif mb-4">
            Existential Chicken
          </h2>
          <p className="text-3xl mb-12">
            A philosophy game
          </p>
          <Link href="existential-chicken" className="text-lg font-medium text-blue-500">
            Check it out
            <ArrowRightIcon className="w-6 h-6 inline-block ml-2" />
          </Link>
        </div>

        <div className="flex-1">
          <Image src="/existential-chicken-box.png" width="525" height="665" alt="Existential Chicken box & question cards" />
        </div>
      </div>
    </Section>
  </Layout>
);

export default IndexPage;
