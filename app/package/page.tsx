import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import packageDataFile from "@/public/packagedata.json";
import { PackageSection } from "@/components/package-section";
import type { InternetPackageData } from "@/types";

const packages = packageDataFile.internet_packages as InternetPackageData[];
export const metadata = { title: "Internet Packages | HomeNet", description: "Explore HomeNet's high-speed fiber internet packages." };

export default function PackagePage() {
  return <main><section className="relative isolate overflow-hidden bg-ink py-20 sm:py-28"><Image src="/assets/Corporate-Service.jpg" alt="People enjoying a fast HomeNet connection" fill priority sizes="100vw" className="-z-20 object-cover" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061833]/95 via-[#071b3a]/82 to-[#071b3a]/45" /><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="max-w-2xl text-white"><p className="mb-5 text-sm font-bold uppercase tracking-[.18em] text-blue-300">HomeNet fiber internet</p><h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Find the right speed for every day.</h1><p className="mt-6 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">From streaming and gaming to busy homes and growing teams, HomeNet packages keep every device reliably connected.</p><a href="#packages" className="mt-9 inline-flex h-12 items-center rounded-lg bg-sky px-6 text-sm font-bold text-white transition hover:bg-white hover:text-ink">Explore packages <ArrowRight className="ml-2" size={17} /></a></div></div></section><section className="border-b border-slate-100 bg-white py-10"><div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-4 px-5 sm:px-8">{["Unlimited BDIX speed", "24/7 customer support", "Reliable fiber connection"].map((benefit) => <div key={benefit} className="flex items-center gap-2 text-sm font-semibold text-ink"><BadgeCheck size={18} className="text-sky" />{benefit}</div>)}</div></section><PackageSection packages={packages} initialPackageCount={packages.length} title="Choose your HomeNet package" description="Eight fiber plans designed for the way you connect." /></main>;
}
