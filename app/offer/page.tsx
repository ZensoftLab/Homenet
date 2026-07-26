import Image from "next/image";
import { ArrowRight } from "lucide-react";

const offers = [
  "New Connection Offer",
  "Family Internet Offer",
  "Business Connection Offer",
];

export const metadata = { title: "Internet Offers | HomeNet", description: "Discover HomeNet's latest internet offers." };

export default function OfferPage() {
  return <main><section className="relative isolate overflow-hidden bg-ink py-20 sm:py-28"><Image src="/assets/Offer-picture.jpg" alt="HomeNet internet offer" fill priority sizes="100vw" className="-z-20 object-cover" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061833]/95 via-[#071b3a]/82 to-[#071b3a]/45" /><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="max-w-2xl text-white"><p className="mb-5 text-sm font-bold uppercase tracking-[.18em] text-blue-300">More value with HomeNet</p><h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Great internet, even better offers.</h1><p className="mt-6 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">Explore special offers designed to help every home and business get connected for less.</p><a href="#offers" className="mt-9 inline-flex h-12 items-center rounded-lg bg-sky px-6 text-sm font-bold text-white transition hover:bg-white hover:text-ink">View offers <ArrowRight className="ml-2" size={17} /></a></div></div></section><section id="offers" className="bg-mist py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Limited-time opportunities</p><h2 className="section-title">HomeNet Offers</h2><p className="section-copy">Choose an offer that makes staying connected even more rewarding.</p></div><div className="mt-14 grid gap-6 md:grid-cols-3">{offers.map((offer) => <article key={offer} className="overflow-hidden rounded-2xl bg-white shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-xl"><div className="relative aspect-[4/3]"><Image src="/assets/Offer-picture.jpg" alt={offer} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div><h3 className="p-6 text-xl font-bold text-ink">{offer}</h3></article>)}</div></div></section></main>;
}
