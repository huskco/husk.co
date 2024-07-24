import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import Section from "../components/Section";
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const IndexPage = () => (
  <Layout title="Home | Husk">
    <div className="min-h-full md:flex justify-center items-center">
      <Section>
        <div className="md:flex justify-center items-center md:space-x-12 space-y-4">
          <div className="flex-1">
            <h1 className='text-5xl font-serif mb-4'>
              Small projects from Lesley & Joshua Ogle
            </h1>
  
            <p className="text-xl text-neutral-500">
              Check out the first one
            </p>
          </div>

          <Link href="existential-chicken" className="flex-1 bg-green-900 rounded-3xl p-12 flex flex-col justify-center space-y-4">
            <Image src="/existential-chicken-logo.svg" width="64" height="64" alt="Existential Chicken" className="fill-black" />
 
            <span className="flex items-center justify-start text-4xl font-serif font-semibold text-yellow-500">
              Existential Chicken
            </span>
          </Link>
        </div>
      </Section>
    </div>
  </Layout>
);

export default IndexPage;
