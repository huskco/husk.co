import Layout from "../components/Layout";
import Section from "../components/Section";
import Surface from "../components/Glass";

const AboutPage = () => (
  <Layout title="About | Huske">
    <Section>
      <div className="md:w-1/2">
        <h1 className='text-3xl font-serif font-semibold mb-4'>
          Sometimes small is better
          <span className="align-bottom ml-2">🌱</span>
        </h1>
        <p className="text-lg mb-4">
          We're a tiny two-person creative co-op.
          Working with startups has made us fall in love with the early stages of product development.
          Unlike traditional startups racing to scale,
          Husk is taking a different path:
          we plan to stay small, creative, and focused on our projects.
          If one gets too big for us, we'll find it a new home.
          Until then we'll keep making things that we think should be in the world and having fun.
        </p>

        <p className="text-lg mb-4">
          Never hiring.
        </p>
      </div>
    </Section>
  </Layout>
);

export default AboutPage;
