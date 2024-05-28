import Image from "next/image";
import { Skills, Buildings, Coins } from '@/Modules/index'
import Navbar from "@/Modules/Coins/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800 text-white">
        <Navbar />
      <div className="z-10 w-screen max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Skills />
        <Coins />
        <Buildings />
      </div>
    </main>
  );
}
