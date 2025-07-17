'use client'

import Image from "next/image"
import LinkButton from "../Link"

export default function SectionBanner(){
    return(
        <section className="first-section relative">
            <div className="bg-[url('/background.avif')] bg-cover bg-center text-white h-screen w-full flex justify-center items-center flex-col p-3 sm:p-5 relative">
                <div className="text-center max-w-5xl">
                    <h1 className="font-black sm:text-[32px] text-[24px]">Você não precisa entender de internet para começar a vender online</h1>
                    <p className="py-7 sm:text-[16px] text-[14px] font-bold">Descubra o passo a passo completo — do zero à sua primeira venda no e-commerce.<br /> Produto, fornecedor, loja, tráfego e atendimento: tudo explicado de forma simples, prática e sem enrolação.</p>
                    <LinkButton text="Quero garantir minha vaga agora"></LinkButton>
                </div>

                <div className="absolute bottom-[50px] bg-black/50 py-2 px-5 rounded-xl mx-5 z-[1]">
                    <p className="font-bold sm:text-[16px] text-[14px]">  Curso Presencial | Início: 12 de Agosto | Hotel Momax - Marília/SP </p>
                </div>
            </div>
            <div className="absolute top-0 w-full h-full">
                <Image src={'/overlay.png'} alt="overlay imagem" width={1000} height={1000} className="w-full h-full object-cover"></Image>
            </div>
        </section>
    )
}