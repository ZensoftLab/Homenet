import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = { metadataBase: new URL("https://homenet.com"), title: "HomeNet | Fast, Reliable Fiber Internet", description: "HomeNet delivers reliable, high-speed fiber internet for homes and businesses.", icons: { icon: [{ url: "/assets/fabiconlogo.png", type: "image/png" }], apple: [{ url: "/assets/fabiconlogo.png", type: "image/png" }], shortcut: ["/assets/fabiconlogo.png"] }, openGraph: { title: "HomeNet Internet Service Provider", description: "Fast fiber internet, dependable service, human support.", type: "website", images: [{ url: "/assets/fabiconlogo.png", width: 512, height: 512, alt: "HomeNet logo" }] } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>; }
