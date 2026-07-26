"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PackageCard } from "@/components/package-card";
import type { InternetPackageData, PackagePlan } from "@/types";

const INITIAL_PACKAGE_COUNT = 4;

function formatTaka(amount: number) {
  return `TK ${new Intl.NumberFormat("en-US").format(amount)}`;
}

function toPackagePlan(item: InternetPackageData): PackagePlan {
  return {
    name: item.name,
    speed: `${item.speed_mbps} Mbps`,
    price: {
      amount: formatTaka(item.price_per_month_tk),
      billing_cycle: "monthly",
      note: `Including ${item.vat_percentage}% VAT`,
    },
    description: item.tagline,
    action: { text: `Buy ${item.name}`, url: "#contact" },
    whats_included: item.features,
    featured: item.name === "Blue",
  };
}

export function PackageGrid({ packages, initialPackageCount = INITIAL_PACKAGE_COUNT }: { packages: InternetPackageData[]; initialPackageCount?: number }) {
  const [showAll, setShowAll] = useState(false);
  const visiblePackages = showAll ? packages : packages.slice(0, initialPackageCount);

  return <>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {visiblePackages.map((item) => <PackageCard key={item.name} plan={toPackagePlan(item)} />)}
    </div>
    {!showAll && packages.length > initialPackageCount && <div className="mt-10 text-center">
      <button onClick={() => setShowAll(true)} className="inline-flex h-12 items-center rounded-lg border border-sky bg-white px-6 text-sm font-bold text-sky transition hover:-translate-y-0.5 hover:bg-sky hover:text-white">
        Load More Packages <ChevronDown className="ml-2" size={18} />
      </button>
    </div>}
  </>;
}
