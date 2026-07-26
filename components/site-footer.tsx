import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";

const columns = [
  { title: "COMPANY", links: [{ label: "About Us", href: "/#corporate" }, { label: "Package", href: "/package" }, { label: "Bill Payment", href: "/#contact" }, { label: "Others", href: "/" }] },
  { title: "SUPPORT", links: [{ label: "How to Pay?", href: "/#contact" }, { label: "Self-care", href: "/" }, { label: "Articles", href: "/" }, { label: "Contact Us", href: "/#contact" }] },
  { title: "QUICK LINKS", links: [{ label: "Join Group", href: "/" }, { label: "Like our Page", href: "/" }] },
  { title: "LEGAL", links: [{ label: "Terms Conditions", href: "/" }, { label: "Privacy Policy", href: "/" }] },
];

export function SiteFooter() {
  return <footer className="bg-[#041126] text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[2fr_repeat(4,1fr)]"><div><div className="flex items-center gap-2.5"><span className="grid size-11 place-items-center overflow-hidden rounded-xl bg-white"><Image src="/assets/fabiconlogo.png" alt="HomeNet logo" width={44} height={44} className="size-9 object-contain" /></span><span className="text-xl font-extrabold">Home<span className="text-sky">Net</span></span></div><p className="mt-5 max-w-xs text-sm leading-6 text-blue-100">Providing reliable and high-speed internet solutions for homes and businesses.</p></div>{columns.map((column) => <div key={column.title}><h3 className="text-sm font-bold tracking-wide text-white">{column.title}</h3><ul className="mt-5 space-y-3">{column.links.map((link) => <li key={link.label}><a href={link.href} className="text-sm text-blue-200 transition hover:text-white">{link.label}</a></li>)}</ul></div>)}</div><div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-blue-200 sm:px-8 md:flex-row md:items-center md:justify-between"><p>© 2025 HomeNet. All Rights Reserved.</p><div className="flex flex-wrap items-center gap-4"><a aria-label="Facebook" href="#" className="hover:text-white"><Facebook size={18} /></a><a aria-label="Instagram" href="#" className="hover:text-white"><Instagram size={18} /></a><a aria-label="YouTube" href="#" className="hover:text-white"><Youtube size={18} /></a><span className="h-4 w-px bg-white/20" /><span>Crafted By <a href="https://zensoftlab.com/" className="font-bold text-white hover:text-sky">Zensoft Lab</a></span></div></div></div></footer>;
}
