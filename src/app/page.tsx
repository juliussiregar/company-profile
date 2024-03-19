"use client"
import About_us from "@/app/about-us/page";

import Hero from "@/components/Hero";
import Skema_Sertifikasi from "./skema-sertifikasi/page";



export default function Home() {
  return (
    <div>
    <div>
    <Hero />
    </div>
    <div>
    <About_us />
    </div>
    <div>
      <Skema_Sertifikasi/>
    </div>
  </div>
  );
}
