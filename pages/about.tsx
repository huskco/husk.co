import Link from "next/link";
import Layout from "../components/Layout";
import Section from "../components/Section";

const AboutPage = () => (
  <Layout
    title="About | Husk"
    description="Husk is a creative studio in Denver, Colorado, making games, software, and other things for curious people."
  >
    <Section>
      <div className="md:w-2/3 space-y-12">
        <div>
          <h1 className="text-3xl font-serif font-semibold mb-4">
            About Husk
          </h1>
          <p className="text-lg text-pretty">
            Husk is a creative studio in Denver, Colorado.
            We make games, software, and other things for curious people.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif mb-4">What we make</h2>
          <p className="text-lg text-pretty mb-4">
            Our first release is Existential Chicken, a card game built around philosophy's biggest questions.
            It's a small project, a warm-up for bigger things.
            Software comes next.
          </p>
          <Link href="/existential-chicken" className="text-lg underline">
            See Existential Chicken →
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-serif mb-4">What we care about</h2>
          <p className="text-lg text-pretty">
            We would rather make a few things well than a lot of things quickly.
            That means paying attention to details most people never consciously notice:
            the wording of every question, the type on every card, the photos on this site.
            They add up to something you can feel.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif mb-4">Say hello</h2>
          <a href="mailto:hello@husk.co" className="text-lg underline">
            hello@husk.co
          </a>
        </div>
      </div>
    </Section>
  </Layout>
);

export default AboutPage;
