"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import LinkButton from "../Link";

export default function SectionImages() {
  return (
    <section className="py-10 bg-[#060606]">
      <h1 className="font-semibold sm:text-[32px] text-[24px] text-gradient text-center mb-5">
        Alunos TegPro
      </h1>
      <Swiper
        slidesPerView={4.5}
        breakpoints={{
          0: { slidesPerView: 2.5 },
          750: { slidesPerView: 4.5 },
        }}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}>
        <SwiperSlide>
          <figure className="border-[2px] border-[var(--primary)] flex justify-center items-center relative">
            <Image
              src={"/imagem-aluno1.avif"}
              width={300}
              height={300}
              alt="aluno 1"
              className="w-full h-full object-cover"
              loading="lazy"></Image>
            <div className="absolute top-0 w-full h-full">
              <Image
                src={"/overlay.avif"}
                alt="overlay imagem"
                width={300}
                height={300}
                className="w-full h-full object-fill"
                loading="lazy"></Image>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="border-[2px] border-[var(--primary)] flex justify-center items-center relative">
            <Image
              src={"/imagem-aluno2.avif"}
              width={300}
              height={300}
              alt="aluno 2"
              className="w-full h-full object-cover"
              loading="lazy"></Image>
            <div className="absolute top-0 w-full h-full">
              <Image
                src={"/overlay.avif"}
                alt="overlay imagem"
                width={300}
                height={300}
                className="w-full h-full object-fill"
                loading="lazy"></Image>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="border-[2px] border-[var(--primary)] flex justify-center items-center relative">
            <Image
              src={"/imagem-aluno3.avif"}
              width={300}
              height={300}
              alt="aluno 3"
              className="w-full h-full object-cover"
              loading="lazy"></Image>
            <div className="absolute top-0 w-full h-full">
              <Image
                src={"/overlay.avif"}
                alt="overlay imagem"
                width={300}
                height={300}
                className="w-full h-full object-fill"
                loading="lazy"></Image>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="border-[2px] border-[var(--primary)] flex justify-center items-center relative">
            <Image
              src={"/imagem-aluno4.avif"}
              width={300}
              height={300}
              alt="aluno 4"
              className="w-full h-full object-cover"
              loading="lazy"></Image>
            <div className="absolute top-0 w-full h-full">
              <Image
                src={"/overlay.avif"}
                alt="overlay imagem"
                width={300}
                height={300}
                className="w-full h-full object-fill"
                loading="lazy"></Image>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="border-[2px] border-[var(--primary)] flex justify-center items-center relative">
            <Image
              src={"/imagem-aluno1.avif"}
              width={300}
              height={300}
              alt="aluno 1"
              className="w-full h-full object-cover"
              loading="lazy"></Image>
            <div className="absolute top-0 w-full h-full">
              <Image
                src={"/overlay.avif"}
                alt="overlay imagem"
                width={300}
                height={300}
                className="w-full h-full object-fill"
                loading="lazy"></Image>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="border-[2px] border-[var(--primary)] flex justify-center items-center relative">
            <Image
              src={"/imagem-aluno2.avif"}
              width={300}
              height={300}
              alt="aluno 2"
              className="w-full h-full object-cover"
              loading="lazy"></Image>
            <div className="absolute top-0 w-full h-full">
              <Image
                src={"/overlay.avif"}
                alt="overlay imagem"
                width={300}
                height={300}
                className="w-full h-full object-fill"
                loading="lazy"></Image>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="border-[2px] border-[var(--primary)] flex justify-center items-center relative">
            <Image
              src={"/imagem-aluno3.avif"}
              width={300}
              height={300}
              alt="aluno 3"
              className="w-full h-full object-cover"
              loading="lazy"></Image>
            <div className="absolute top-0 w-full h-full">
              <Image
                src={"/overlay.avif"}
                alt="overlay imagem"
                width={300}
                height={300}
                className="w-full h-full object-fill"
                loading="lazy"></Image>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="border-[2px] border-[var(--primary)] flex justify-center items-center relative">
            <Image
              src={"/imagem-aluno4.avif"}
              width={300}
              height={300}
              alt="aluno 4"
              className="w-full h-full object-cover"
              loading="lazy"></Image>
            <div className="absolute top-0 w-full h-full">
              <Image
                src={"/overlay.avif"}
                alt="overlay imagem"
                width={300}
                height={300}
                className="w-full h-full object-fill"
                loading="lazy"></Image>
            </div>
          </figure>
        </SwiperSlide>
      </Swiper>
      <div className="flex items-center justify-center py-10 my-10 px-5 gap-10 text-[#F0F0F0] flex-wrap">
        <div className="max-w-[600px] sm:text-start text-center">
          <h2 className="text-gradient sm:text-[32px] text-[24px] font-bold mb-3 text-center sm:text-start">
            Não é sorte. É decisão.
          </h2>
          <p className="sm:text-[16px] text-[14px] text-center sm:text-start max-w-[300px]">
            Esses alunos escolheram agir — e hoje sabem exatamente como vender
            na internet.
            <strong>Você está a uma escolha de distância.</strong>
          </p>
        </div>
        <div>
          <LinkButton text="QUERO APRENDER A VENDER ONLINE" shadow></LinkButton>
        </div>
      </div>
    </section>
  );
}
