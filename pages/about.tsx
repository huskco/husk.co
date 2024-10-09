import Layout from "../components/Layout";
import Section from "../components/Section";

const AboutPage = () => (
  <Layout title="About | Huske">
    <Section>
      <h1 className='text-3xl font-serif mb-4'>
        We're working on projects we hope outgrow us
      </h1>
      <p className="mb-4 text-xl">
        We're a designer & developer located in Denver, Colorado.
        We're not trying to make the next big thing,
        we just want to bring good ideas to life
        and grow them as far as we can. <span className="text-2xl align-middle">🌱</span>
      </p>
      <p className="text-xl">
        Never hiring <span className="text-2xl align-middle">🤷</span>
      </p>
    </Section>
  </Layout>
);

export default AboutPage;
