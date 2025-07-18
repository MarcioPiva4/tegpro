'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import Image from "next/image"
import LinkButton from "../Link"

export default function SectionBanner() {
    const bgImages = [
        '/background-1.png',
        '/background-2.png',
        '/background-3.png',
        '/background-4.png',
        '/background-5.png'
    ]

    return (
        <section className="first-section relative w-full h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="w-full h-full"
                    loop
                >
                    {bgImages.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full relative">
                                <Image
                                    src={src}
                                    alt={`background ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="relative z-10 flex justify-start pt-[125px] lg:pt-0 lg:justify-center items-center flex-col p-3 lg:p-5 h-full text-white text-center">
                <div className="max-w-5xl">
                    <h1 className="font-black sm:text-[32px] text-[24px]">
                        Você não precisa entender de internet para começar a vender online
                    </h1>
                    <p className="py-7 sm:text-[16px] text-[14px] font-bold">
                        Descubra o passo a passo completo — do zero à sua primeira venda no e-commerce.<br />
                        Produto, fornecedor, loja, tráfego e atendimento: tudo explicado de forma simples, prática e sem enrolação.
                    </p>
                    <LinkButton text="Quero garantir minha vaga agora" />
                </div>

                <div className="absolute bottom-[10%] lg:bottom-[50px] bg-black/50 py-2 px-5 rounded-xl mx-5 z-[1]">
                    <p className="font-bold sm:text-[16px] text-[14px]">
                        Curso Presencial | Início: 12 de Agosto | Hotel Momax - Marília/SP
                    </p>
                </div>
            </div>
        </section>
    )
}
