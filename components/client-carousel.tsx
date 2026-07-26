"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const clients = ["NEXORA", "Finovo", "EDUVERSE", "Orbit", "MediCore", "NORTHSTAR", "Atlas Co.", "Pixelworks"];
export function ClientCarousel() { return <Swiper modules={[Autoplay]} loop speed={3500} autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }} slidesPerView={2} spaceBetween={16} breakpoints={{ 640:{slidesPerView:4}, 1024:{slidesPerView:6} }} className="!pb-2">{clients.map((client) => <SwiperSlide key={client}><div className="grid h-24 place-items-center rounded-xl border border-slate-100 bg-white px-3 text-center text-sm font-extrabold tracking-wider text-slate-400 grayscale transition hover:border-blue-100 hover:text-sky hover:grayscale-0">{client}</div></SwiperSlide>)}</Swiper>; }
