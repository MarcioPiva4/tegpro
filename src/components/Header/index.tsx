"use client";
import Image from "next/image";
import LinkButton from "../Link";
import { useEffect, useState } from "react";

export default function Header() {
  // const [scrolledPast, setScrolledPast] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const firstSection = document.querySelector(
  //       ".first-section"
  //     ) as HTMLElement;
  //     if (firstSection) {
  //       const triggerHeight = firstSection.offsetHeight;
  //       setScrolledPast(window.scrollY > triggerHeight);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <header
      className={`
        fixed w-full z-[10000] border-b-[3px] border-black transition-colors duration-300 bg-black/50
      `}>
      <div className="flex sm:justify-between justify-center items-center px-8 flex-wrap gap-2">
        <a href="/" aria-label="Logo da empresa Tegbe" >
          <Image src={'/logo.avif'} alt="logo tegpro" width={195} height={70} />
        </a>
        <div className="sm:block hidden"><LinkButton text="Quero garantir minha vaga agora"></LinkButton></div>
      </div>
    </header>
  );
}
