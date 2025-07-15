'use client'
import Image from "next/image";

export default function SectionVideo(){
    return(
        <section className="py-10">
            <div className="flex justify-center items-center flex-col text-center sm:px-10 px-5 max-w-[1000px] m-auto">
                <h1 className="mb-5 sm:text-[32px] text-[24px] font-semibold">Antes de decidir, veja com seus próprios olhos.</h1>
                <p className="mb-10 flex flex-col gap-3 sm:text-[16px] text-[14px]">
                    <span>Neste vídeo, você vai sentir o que é fazer parte do TegPro.</span>
                    <span>Vai entender por que tanta gente que nunca tinha vendido nada está agora faturando com produto físico, com clareza, apoio e estratégia de verdade.</span>
                    <span> <strong>Assista agora</strong> e descubra o que pode acontecer quando você para de tentar sozinho.</span>
                </p>
                <Image src={'/video-background.png'} width={500} height={500} className="w-auto h-auto mt-5" alt="video de background exemplo"></Image>
            </div>
        </section>
    )
}