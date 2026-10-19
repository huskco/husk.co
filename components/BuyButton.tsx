import { GiftIcon } from "@heroicons/react/20/solid";

const checkoutUrl = "https://buy.stripe.com/aEU03c7H97fOcda4gi";

type Props = {
  className?: string
};

const BuyButton = ({ className = '' }: Props) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    <a
      href={checkoutUrl}
      className="flex flex-wrap items-center gap-2 md:gap-4"
    >
      <span className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-xs text-nowrap text-base md:text-lg transition-colors">
        Buy Now
      </span>

      <span className="flex gap-1 p-2 items-center text-nowrap text-black">
        <span>$24.00</span>
        <span className="text-xs">+ shipping</span>
      </span>
    </a>

    <p className="flex items-center gap-1.5 text-sm text-stone-600">
      <GiftIcon className="size-4 text-stone-500" />
      Makes a great gift for the deep thinker in your life
    </p>

    <p className="text-xs text-stone-500">
      Secure checkout with Stripe · 30-day returns
    </p>
  </div>
);

export default BuyButton;
