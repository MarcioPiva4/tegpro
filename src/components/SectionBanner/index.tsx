'use client'

import LinkButton from "../Link"

export default function SectionBanner(){
    return(
        <section className="first-section">
            <div className="bg-[url('/background.png')] bg-cover bg-center text-white h-screen w-full flex justify-center items-center flex-col p-3 sm:p-5 relative">
                <div className="text-center max-w-3xl">
                    <h1 className="font-black sm:text-[32px] text-[24px]">Domine o E-commerce e Venda de Verdade com o <span className="text-gradient">TegPro Marília</span></h1>
                    <p className="py-7 sm:text-[16px] text-[14px]">Mesmo sem experiência, você vai sair do curso com anúncios rodando e vendas acontecendo.</p>
                    <LinkButton text="Quero garantir minha vaga agora"></LinkButton>
                </div>

                <div className="absolute bottom-[50px] bg-black/50 py-2 px-5 rounded-xl mx-5">
                    <h4 className="font-bold sm:text-[16px] text-[14px]"> Curso Presencial | Início: 15 de Julho | Hotel Momax - Marília/SP </h4>
                </div>
                
            </div>
        </section>
    )
}