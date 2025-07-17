import Image from "next/image";
import LinkButton from "../Link";

export default function SectionLearn(){
    return(
        <section className="py-10">
            <h1 className="font-semibold sm:text-[32px] text-[24px] text-gradient text-center mb-10">O que você vai aprender:</h1>

            <div className="flex flex-col px-10 gap-10">

                <div className="w-full flex justify-center items-center gap-10 py-10">
                    <div className="max-w-[450px] w-full">
                        <h1 className="sm:text-[32px] text-[24px] font-extrabold mb-3">Introdução ao E-commerce e Identificação de Nichos e Oportunidades</h1>
                        <p className="sm:text-[16px] text-[14px]">Descubra como funciona o jogo do e-commerce e aprenda a identificar nichos lucrativos e produtos com alta demanda. Saia da dúvida e comece com clareza e direção.</p>
                    </div>
                    <div>
                        <Image src={'/desktop.png'} alt="desktop" width={1000} height={660}></Image>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center gap-10 py-10">
                    <div>
                        <Image src={'/desktop.png'} alt="desktop" width={1000} height={660}></Image>
                    </div>
                    <div className="max-w-[450px] w-full">
                        <h1 className="sm:text-[32px] text-[24px] font-extrabold mb-3">Criação de Anúncios de Alta Conversão</h1>
                        <p className="sm:text-[16px] text-[14px]">Aprenda como montar anúncios profissionais que atraem, convencem e convertem. Título, imagem, descrição e estratégia para aparecer e vender mais.</p>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center gap-10 py-10">
                    <div className="max-w-[450px] w-full">
                        <h1 className="sm:text-[32px] text-[24px] font-extrabold mb-3">Marketing Digital e Estratégias de Publicidade</h1>
                        <p className="sm:text-[16px] text-[14px]">Saiba como impulsionar seus produtos com campanhas no Mercado Livre, Instagram e Facebook. Você vai aprender a investir pouco e atrair muitos — mesmo com orçamento apertado.</p>
                    </div>
                    <div>
                        <Image src={'/desktop.png'} alt="desktop" width={1000} height={660}></Image>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center gap-10 py-10">
                    <div>
                        <Image src={'/desktop.png'} alt="desktop" width={1000} height={660}></Image>
                    </div>
                    <div className="max-w-[450px] w-full">
                        <h1 className="sm:text-[32px] text-[24px] font-extrabold mb-3">Atendimento e Reputação no E-commerce e Logística de Envio</h1>
                        <p className="sm:text-[16px] text-[14px]">Aprenda a lidar com clientes, manter sua reputação nas alturas e organizar envios com eficiência. Quem atende bem, vende mais — e por mais tempo.</p>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center gap-10 py-10">
                    <div className="max-w-[450px] w-full">
                        <h1 className="sm:text-[32px] text-[24px] font-extrabold mb-3">Estrutura Organizacional e Papel do Gerente de E-commerce</h1>
                        <p className="sm:text-[16px] text-[14px] mb-3">Você vai aprender como montar a estrutura do seu e-commerce, organizar processos e agir como um verdadeiro gerente, pronto para crescer com consistência.</p>
                        <LinkButton text="QUERO APRENDER A VENDER ONLINE"></LinkButton>
                    </div>
                    <div>
                        <Image src={'/desktop.png'} alt="desktop" width={1000} height={660}></Image>
                    </div>
                </div>

            </div>
        </section>
    )
}