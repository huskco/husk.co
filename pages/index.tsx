import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import Section from "../components/Section";
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const IndexPage = () => (
  <Layout title='Husk | Thoughtful things for curious minds'>
    <Section>
      <div className='flex flex-col md:flex-row items-center gap-8'>
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

        <Link className='w-full md:w-1/2' href='/existential-chicken'>
          <Image
            src="/existential-chicken-box-photo.jpg"
            width={1180}
            height={1180}
            sizes="(min-width: 768px) 50vw, 100vw"
            preload
            alt='The Existential Chicken box and deck beside a question card on carved stone'
            className='aspect-square object-cover rounded-2xl'
          />
        </Link>
      </div>
    </Section>
  </Layout>
);

export default IndexPage;
