import { PackageGrid } from "@/components/package-grid";
import type { InternetPackageData } from "@/types";

type PackageSectionProps = { packages: InternetPackageData[]; initialPackageCount?: number; title?: string; description?: string; className?: string; };

export function PackageSection({ packages, initialPackageCount, title = "Package Plan", description = "Choose a package that suits your budget & business.", className = "bg-mist" }: PackageSectionProps) {
  return <section id="packages" className={`${className} py-20 sm:py-28`}><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Simple, transparent pricing</p><h2 className="section-title">{title}</h2><p className="section-copy">{description}</p></div><div className="mt-14"><PackageGrid packages={packages} initialPackageCount={initialPackageCount} /></div></div></section>;
}
