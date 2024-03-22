"use client"
import About_us from "@/app/about-us/page";

import Hero from "@/components/Hero";
import Skema_Sertifikasi from "./skema-sertifikasi/page";
import Our_Team from "./our-team/page";
import History from "./history/page";



export default function Home() {
  return (
    <div>
   
    <Hero />
    <About_us />
    <History />
    <Skema_Sertifikasi/>
    <Our_Team />
  </div>
  );
}
