import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import Section from "../components/Section";
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import styles from '../styles/Home.module.css';

const IndexPage = () => (
  <Layout title='Home - Husk'>
    <Section>
      <div className='flex flex-col sm:flex-row items-center'>
        <div className='w-full md:w-1/2 space-y-4 p-8 text-l text-stone-800'>
          <h1 className='text-3xl text-pretty font-serif text-stone-900 '>
            Sometimes small is just the beginning
          </h1>

          <p>
            We're a tiny studio making apps and goods that we think should be in the world.
            If they outgrow us, we'll find them a good home.
          </p>

          <Link
            href='/existential-chicken'
            className='text-l underline text-stone-600 hover:text-stone-800 inline-flex items-center'
          >
            But first a card game
            <ArrowRightIcon className='h-5 w-5 ml-2 mt-1 align-middle'/>
          </Link>
        </div>

        <div className='w-full md:w-1/2 bg-gradient-to-br from-stone-100 to-stone-200'>
          <Link href='/existential-chicken'>
            <Image
              src='/existential-chicken-box.png'
              height={1200} width={1200}
              alt='Existential Chicken box'
              className='object-cover'
            />
          </Link>
        </div>
      </div>
    </Section>
  </Layout>
);

export default IndexPage;
