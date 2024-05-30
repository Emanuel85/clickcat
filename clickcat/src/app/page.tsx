import Image from "next/image";
import { Skills, Buildings, Coins } from '@/Modules/index'
import Navbar from "@/Modules/Coins/components/Navbar";
import  Style  from "./index.module.css";

export default function Home() {
  return (
    <main className={Style.containerIndex}>
        <Navbar />
      <div className={Style.entities}>
        <Skills />
        <Coins />
        <Buildings />
      </div>
    </main>
  );
}
