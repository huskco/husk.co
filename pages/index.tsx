import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import Section from "../components/Section";
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const IndexPage = () => (
  <Layout title='Home - Husk'>
    <Section>
      <div className='flex flex-col sm:flex-row items-center gap-8'>
        <div className='w-full md:w-1/2 flex flex-col gap-4'>
          <h1 className='text-3xl text-pretty font-serif font-semibold'>
            Making thoughtful things for curious minds
          </h1>

          <p>
            We're a tiny creative studio creating digital and physical goods for a better world.
          </p>

          <div className="relative">
            <Link href='/existential-chicken' className="flex underline">
              But first a card game
              <ArrowRightIcon className='h-5 w-5 ml-2 mt-1 align-middle'/>
            </Link>
          </div>
        </div>

        <div className='w-full md:w-1/2'>
          <Link href='/existential-chicken'>
            <Image
              src="/existential-chicken-thumbnail.jpg"
              width={1800}
              height={1350}
              alt='Existential Chicken box'
              className='aspect-square object-cover rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-500'
            />
          </Link>
        </div>
      </div>
    </Section>
  </Layout>
);

export default IndexPage;
