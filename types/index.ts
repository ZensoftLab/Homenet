export interface PackagePlan { name: string; speed: string; price: { amount: string; billing_cycle: string; note: string }; description: string; action: { text: string; url: string }; whats_included: string[]; featured?: boolean; }
export interface InternetPackageData { name: string; tagline: string; speed_mbps: number; price_per_month_tk: number; vat_percentage: number; features: string[]; }
export interface HeroSlide { image: string; eyebrow: string; title: string; description: string; }
export interface CoverageArea { title: string; locations: string; icon: string; }
