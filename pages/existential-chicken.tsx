import Link from "next/link";
import Image from "next/image";
import Section from "../components/Section";
import Layout from "../components/Layout";
import Badge from "../components/Badge";
import Area from "../components/Area";
import Surface from "../components/Surface";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Step = ({ number, image, text }: Props) => {
  return (
    <div className="m-2 p-4 flex flex-col items-center flex-1 rounded-xl text-center relative">
      <div className="text-stone-300 text-9xl absolute left-0 top-0">{number}</div>
      <Image src={image} width="350" height="350" alt={`Step ${number}`} className="max-w-48 relative z-10"/>
      <p className="text-stone-700 px-4 pb-4">
        {text}
      </p>
    </div>
  )
}

const ExistentialChickenPage = () => (
  <Layout title="Existential Chicken - Husk">
    <Section>
      <div className="flex-1 justify-center text-center">
        <div className="space-y-4 md:space-y-8 p-6 py-8">
          <h1 className="text-4xl md:text-6xl font-semibold font-serif">
            Existential Chicken
          </h1>

          <div className="text-lg">
            <p className="mb-3">
              Explore philosophy's toughest questions about the nature of the universe and what really matters
              with this conversation game and maybe a little bit of wine (in vino veritas, after all).
            </p>
            <p className="mb-4">
              It is not a game about chickens.
            </p>
          </div>

          <div className="flex space-x-2 justify-center">
            <Badge>Ages 12+</Badge>
            <Badge>15-30 mins</Badge>
            <Badge>Up to 12 players</Badge>
          </div>
        </div>
      </div>

      <Area
        backgroundImage="/existential-chicken-thumbnail.jpg"
        className='rounded-2xl aspect-video'
      >{''}</Area>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-auto gap-4 items-stretch">
        <Area className="md:row-span-3 flex-1 relative flex flex-col">
          <p className="flex-1 text-left p-8 md:p-12 pb-2 md:pb-2 text-2xl italic font-serif text-white">
            Challenge your friends to see who can answer the toughest questions in the universe
          </p>
          <Image
            src="/existential-chicken-dare.jpg"
            alt="Plato about to ask you a question"
            width={900}
            height={700}
          />
        </Area>

        <Area backgroundColor="bg-white" className="flex flex-col row-span-1 justify-center text-lg text-left font-serif p-12">
          <dl>
            <dt className="text-sm space-x-4 text-stone-600">
              <span className="text-bold">chicken</span>
              <span>/ˈtʃɪk.ɪn/</span>
              <span className="italic">noun</span>
            </dt>
            <dd className="text-sm text-stone-700 font-light">
              a game where players challenge each other to see who can go furthest and not "chicken out"
            </dd>
          </dl>
        </Area>

        <Area
          backgroundImage="/existential-chicken-stack.jpg"
          className="row-span-2 p-36">
        </Area>
      </div>
    </Section>

    <Section>
      <h2 className="text-3xl font-serif mb-8 text-center">
        What's in the box?
      </h2>
      <div className="md:flex justify-center items-center gap-4">
        <div>
          <Image src="/existential-chicken-box.png" width="400" height="400" alt="52 question cards" />
        </div>
        <div className="text-center md:text-left">
          <span className="text-sm font-bold">Includes</span>
          <ul>
            <li>52 question cards</li>
            <li>1 instruction booklet</li>
            <li>0 chickens</li>
          </ul>
        </div>
      </div>
    </Section>

    {/* How to Play Section */}
    <Section>
      <h2 className="text-3xl font-serif mb-8 text-center">How do you play?</h2>
      <div className="md:flex justify-center items-stretch font-serif font-medium text-lg">
        <Step number={1} image="/existential-chicken-steps-1.svg" text="Draw the top card and ask the question clearly" />
        <Step number={2} image="/existential-chicken-steps-2.svg" text="Get a point for a thoughtful answer eor you're 'cracked'" />
        <Step number={3} image="/existential-chicken-steps-3.svg" text="At the end, the player with the most points wins" />
      </div>
    </Section>

    <Section>
      <h2 className="text-3xl font-serif mb-8 text-center">
        Try out <span className="super">#</span>14
      </h2>
      <Area>
        <Image
          src="/existential-chicken-question-example.jpg"
          width={1800}
          height={900}
          alt="Does language shape our thoughts and limit what we can think about?"
        />
      </Area>
    </Section>

    {/* FAQ Section */}
    <Section>
      <h2 className="text-3xl font-serif mb-8 text-center">
        Frequently asked questions
      </h2>
      <div className="divide-y divide-black/5 rounded-xl bg-stone-100">
        <Disclosure as="div" className="p-6" defaultOpen={false}>
          <DisclosureButton className="group flex w-full justify-between">
            <span className="text-stone-700 md:text-xl font-serif text-left mb-2">
              Do I need a philosophy degree to play this game?
            </span>
            <ChevronDownIcon className="size-5 text-stone-500 group-data-[hover]:text-stone-500 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="text-sm text-stone-700">
            You already have the only qualification you need: you exist!
            No one could know more about what that means for you and how you see the world.
            Analyzing your own existence is harder than you might think, so we made this game to feel as casual and comfortable as possible.
            Just do your best to answer as as earnestly and thoughtfully as you can and encourage discussion.
          </DisclosurePanel>
        </Disclosure>

        <Disclosure as="div" className="p-6" defaultOpen={false}>
          <DisclosureButton className="group flex w-full justify-between">
            <span className="text-stone-700 md:text-xl font-serif text-left mb-2">
              Who are the statues?
            </span>
            <ChevronDownIcon className="size-5 text-stone-500 group-data-[hover]:text-stone-500 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="text-sm text-stone-700">
            They are based off some of our favorite philosophers: Socrates, Hypatia, Apparchia, Nietzsche, and Jean Paul Sartre.
          </DisclosurePanel>
        </Disclosure>

        <Disclosure as="div" className="p-6" defaultOpen={false}>
          <DisclosureButton className="group flex w-full justify-between">
            <span className="text-stone-700 md:text-xl font-serif text-left mb-2">
              Should I play this game with my coworkers?
            </span>
            <ChevronDownIcon className="size-5 text-stone-500 group-data-[hover]:text-stone-500 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="text-sm text-stone-700">
            Some of these answers could get into religion and ideology, it may be wise to keep it professional and choose another game.
          </DisclosurePanel>
        </Disclosure>

        <Disclosure as="div" className="p-6" defaultOpen={false}>
          <DisclosureButton className="group flex w-full justify-between">
            <span className="text-stone-700 md:text-xl font-serif text-left mb-2">
            What's with the chicken?
            </span>
            <ChevronDownIcon className="size-5 text-stone-500 group-data-[hover]:text-stone-500 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="text-sm text-stone-700">
            <p className="mb-4">
              When coming up with ideas for this game, the game of "chicken" kept coming up and so we got to work on a chicken logo that we ended up loving.
              But then we turned it upside down.
              What was a traumatized chicken became a friendly scarecrow!
            </p>
            <p className="mb-4">
              They needed names.
              Imagine our surprise when it turns out the scarecrow from the Wizard of Oz <em>was</em> given a name in the short-lived TV show… and his name was <em>Socrates</em>!
              And it just happens that there is a famous philosophy story related to ancient Athens and a chicken,
              which was when <em>Diogenes</em>, angry that Plato had described man as “a featherless biped”,
              strolled into the room carrying a plucked chicken and proclaimed “Behold! I’ve brought you a man”,
              for which Plato described him as “Socrates gone mad”.
            </p>
            <p>
              So there we have it. Their names are <em>Socrates</em> and <em>Diogenes</em>.
            </p>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </Section>

    {/* Floating footer buy button */}
    <footer className="sticky bottom-8 flex justify-center">
      <Surface>
        <a
          href="https://buy.stripe.com/3cs3fo9PhfMka52aEF"
          className="flex items-center gap-4 md:gap-12 px-3 py-2"
        >
          <div
            className="block bg-black text-white disabled:bg-stone-400 disabled:text-stone-300 px-6 py-3 rounded-lg shadow-sm text-nowrap text-md md:text-lg">
            Buy the game
          </div>

          <div className="flex gap-1 items-baseline text-nowrap">
            <span>$24</span>
            <span className="text-xs">+ shipping</span>
          </div>
        </a>
      </Surface>
    </footer>
  </Layout>
);

export default ExistentialChickenPage;
