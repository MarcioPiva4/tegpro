"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function SectionImages() {
  return (
    <section className="py-10">
      <Swiper
        slidesPerView={4.5}
        breakpoints={{
          0: { slidesPerView: 2.5 },
          750: { slidesPerView: 4.5 },
        }}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}>
        <SwiperSlide>
          <figure className="border-[2px] border-[var(--primary)]">
            <Image
              src={"/imagem-aluno1.png"}
              width={300}
              height={300}
              alt="aluno 1"
              className="object-cover"></Image>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="border-[2px] border-[var(--primary)]">
            <Image
              src={"/imagem-aluno2.png"}
              width={300}
              height={300}
              alt="aluno 2"
              className="object-cover"></Image>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="border-[2px] border-[var(--primary)]">
            <Image
              src={"/imagem-aluno3.png"}
              width={300}
              height={300}
              alt="aluno 3"
              className="object-cover"></Image>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="border-[2px] border-[var(--primary)]">
            <Image
              src={"/imagem-aluno4.png"}
              width={300}
              height={300}
              alt="aluno 4"
              className="object-cover"></Image>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="border-[2px] border-[var(--primary)]">
            <Image
              src={"/imagem-aluno1.png"}
              width={300}
              height={300}
              alt="aluno 5"
              className="object-cover"></Image>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="border-[2px] border-[var(--primary)]">
            <Image
              src={"/imagem-aluno2.png"}
              width={300}
              height={300}
              alt="aluno 5"
              className="object-cover"></Image>
          </figure>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
