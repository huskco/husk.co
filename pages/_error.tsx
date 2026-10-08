import { NextPageContext } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import Section from '../components/Section';

function Error({ statusCode }) {
  const notFound = statusCode === 404;

  return (
    <Layout title={`${notFound ? 'Page not found' : 'Something went wrong'} | Husk`}>
      <Section>
        <h1 className="text-3xl font-serif font-semibold">
          {notFound ? "We couldn't find that page" : 'Something went wrong'}
        </h1>
        <p>
          <Link href="/" className="underline">Head back home</Link> or email{' '}
          <a href="mailto:hello@husk.co" className="underline">hello@husk.co</a> if you need a hand.
        </p>
      </Section>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
