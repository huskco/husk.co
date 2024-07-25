import Link from "next/link";
import Image from "next/image";
import Section from "../components/Section";
import Layout from "../components/Layout";
import Badge from "../components/Badge";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const ExistentialChickenPage = () => (
  <Layout title="Existential Chicken | Husk">
    <div className="max-w-6xl mx-auto px-4 md:px-12 py-4 md:py-36">
      {/* Header Section */}
      <header className="text-center p-12">
        <Image src="/existential-chicken-logo.svg" width="64" height="64" alt="Existential Chicken Logo" className="mx-auto mb-4" />
        <h1 className="text-5xl font-bold mb-2 font-serif">
          Existential
          <br/>
          Chicken
        </h1>
        <p className="text-lg text-neutral-600">A philosophy game</p>
      </header>

      {/* Introduction Section */}
      <Section>
        <p className="max-w-lg mx-auto text-center text-3xl mb-4 italic font-serif font-light text-neutral-700">
          Dare your closest friends to see who can answer the toughest questions in the universe without losing their mind
        </p>
      </Section>

      {/* Product Section */}
      <Section>
        <div className="md:flex justify-center items-center mb-8 bg-white p-8 md:px-12 md:py-16 rounded-3xl shadow-xl text-neutral-700">
          <div className="flex-1">
            <h2 className="text-4xl font-bold font-serif mb-4">
              Who will<br/>crack first?
            </h2>
            <p className="mb-4">
              Each deck contains 52 challenging philosophical questions to test everything you know about the universe and learn a little more about your friends.
            </p>
            <p className="mb-8">
              It is not a game about chickens.
            </p>
            <div className="flex mb-8 space-x-1">
              <Badge>20 mins</Badge>
              <Badge>4-12 players</Badge>
              <Badge>Ages 12+</Badge>
            </div>
            <div className="bg-neutral-200 p-2 rounded-xl flex items-center inline-flex">
              <button className="bg-black text-white px-6 py-3 rounded-lg mr-2">Sold out</button>
              <span className="p-2">$19.99</span>
            </div>
          </div>

          <div className="flex-1">
            <Image src="/existential-chicken-box.png" width="525" height="665" alt="Existential Chicken box & question cards" />
          </div>
        </div>
      </Section>

      {/* Definition Section */}
      <Section>
        <dl className="text-md max-w-xs mx-auto justify-center items-start text-left font-serif">
          <dt className="space-x-4 text-neutral-900">
            <span className="text-bold">chicken</span>
            <span>/ˈtʃɪk.ɪn/</span>
            <span className="italic">noun</span>
          </dt>
          <dd className="text-sm text-neutral-700 font-light mb-4">
            a game where players challenge each other to see who can go furthest and not "chicken out"
          </dd>
        </dl>
      </Section>

      {/* What's in the Box Section */}
      <Section>
        <h2 className="text-3xl text-center font-light font-serif mb-8 text-center">
          What's in the box?
        </h2>
        <div className="flex justify-center items-center space-x-8 mb-8 ">
          <div>
            <Image src="/existential-chicken-inthebox.svg" width="100" height="100" alt="52 question cards" />
          </div>
          <div>
            <span className="text-sm">Includes</span>
            <ul>
              <li>52 question cards</li>
              <li>1 instruction booklet</li>
              <li>0 chickens</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-black text-white px-6 py-3 rounded-lg">Buy the game</button>
        </div>
      </Section>

      {/* How to Play Section */}
      <Section>e
        <h2 className="text-3xl font-serif mb-8 text-center">How do you play?</h2>
        <div className="md:flex justify-center items-center font-serif font-medium text-sm">
          <div className="m-4 flex-1 bg-neutral-200 p-2 rounded-xl text-center text-neutral-700">
            <Image src="/existential-chicken-steps-1.svg" width="350" height="350" alt="Step 1"/>
            <p className="text-neutral-700 p-4 pt-0">Draw a card and ask the question</p>
          </div>
          <div className="m-4 flex-1 bg-neutral-200 p-2 rounded-xl text-center">
            <Image src="/existential-chicken-steps-2.svg" width="350" height="350" alt="Step 2"/>
            <p className="text-neutral-700 p-4 pt-0">Answer & get a point or you're "cracked"</p>
          </div>
          <div className="m-4 flex-1 bg-neutral-200 p-2 rounded-xl text-center">
            <Image src="/existential-chicken-steps-3.svg" width="350" height="350" alt="Step 3"/>
            <p className="text-neutral-700 p-4 pt-0">The player with the most points wins</p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto p-12">
        <h2 className="text-3xl font-serif mb-8 text-center">
          Frequently asked questions
        </h2>
        <div className="divide-y divide-black/5 rounded-xl bg-neutral-200">
          <Disclosure as="div" className="p-6" defaultOpen={true}>
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-neutral-700 text-xl font-serif mb-2">
                Should I play this game with my coworkers?
              </span>
              <ChevronDownIcon className="size-5 text-neutral-500 group-data-[hover]:text-neutral-500 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="text-sm text-neutral-700">
              No, it would be unwise. Some of these items get into areas about religion and ideology. Keep it professional.
            </DisclosurePanel>
          </Disclosure>

          <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-neutral-700 text-xl font-serif mb-2">
                Who are the statues?
              </span>
              <ChevronDownIcon className="size-5 text-neutral-500 group-data-[hover]:text-neutral-500 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="text-sm text-neutral-700">
              They are based off some of our favorite philosophers: Socrates, Hypatia, Apparchia, Nietzsche, and Jean Paul Sartre.
            </DisclosurePanel>
          </Disclosure>

          <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-neutral-700 text-xl font-serif mb-2">
              What's with the chicken?
              </span>
              <ChevronDownIcon className="size-5 text-neutral-500 group-data-[hover]:text-neutral-500 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="text-sm text-neutral-700">
              When coming up with ideas for this game, the game of chicken kept coming up and so we got to work on a chicken logo that we ended up loving. Then we turned it upside down. What was a traumatized chicken became a friendly scarecrow. We decided that they needed names. Imagine our surprise when it turns out the scarecrow from the Wizard of Oz was given a name in the short-lived TV show… and his name was Socrates!
              <br/>
              Well there is another famous philosophy story related to ancient Athens and a chicken, which was when Diogenes, angry that Plato had described man as “a featherless biped”, strolled into the room carrying a plucked chicken and proclaimed “Behold! I’ve brought you a man”, for which Plato described him as “Socrates gone mad”.
            </DisclosurePanel>
          </Disclosure>
        </div>
      </section>
    </div>
  </Layout>
);

export default ExistentialChickenPage;

