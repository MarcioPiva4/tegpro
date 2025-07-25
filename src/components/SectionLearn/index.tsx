import Image from "next/image";
import LinkButton from "../Link";

export default function SectionLearn(){
    return(
        <section className="pt-10">
            <h1 className="font-semibold sm:text-[36px] text-[28px] text-gradient text-center mb-10">O que você vai aprender:</h1>

            <div className="flex flex-col px-5 sm:px-10 gap-5">

                <div className="w-full flex justify-center items-center gap-10 sm:flex-row flex-col-reverse relative py-10 sm:py-0">
                    <div className="max-w-[450px] w-full">
                        <h1 className="sm:text-[32px] text-[24px] text-center sm:text-start font-extrabold mb-3">Introdução ao <span className="text-nowrap">E-commerce</span> e Identificação de Nichos e Oportunidades</h1>
                        <p className="sm:text-[16px] text-[14px] text-center sm:text-start">Descubra como funciona o jogo do <span className="text-nowrap">e-commerce</span> e aprenda a identificar nichos lucrativos e produtos com alta demanda. Saia da dúvida e comece com clareza e direção.</p>
                    </div>
                    <div className="relative">
                        <Image src={'/desktop-1.avif'} alt="desktop" width={1000} height={660} loading="lazy"></Image>
                        <div className="absolute z-[-1] bottom-[94px] right-[-40px] sm:block hidden xl:bottom-[250px] tv-hidden">
                            <Image src={'/lines-1.png'} alt="desktop" width={400} height={700} loading="lazy" className="xl:w-[700px]"></Image>
                        </div>
                    </div>

                    <div className="absolute z-[-1] bottom-[-130px] sm:block hidden xl:left-[200px] tv-hidden">
                        <Image src={'/lines-2.png'} alt="desktop" width={600} height={700} loading="lazy" className="xl:w-[950px]"></Image>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center gap-10 sm:flex-row flex-col relative py-10 sm:py-0">
                    <div>
                        <Image src={'/desktop-2.avif'} alt="desktop" width={1000} height={660} loading="lazy"></Image>
                    </div>
                    <div className="max-w-[450px] w-full">
                        <h1 className="sm:text-[32px] text-[24px] font-extrabold mb-3 text-center sm:text-start">Criação de Anúncios de Alta Conversão</h1>
                        <p className="sm:text-[16px] text-[14px] text-center sm:text-start">Aprenda como montar anúncios profissionais que atraem, convencem e convertem. Título, imagem, descrição e estratégia para aparecer e vender mais.</p>
                    </div>

                    <div className="absolute z-[-1] bottom-[-140px] sm:block hidden xl:left-[500px] tv-hidden">
                        <Image src={'/lines-3.png'} alt="desktop" width={600} height={700} loading="lazy" className="xl:w-[950px]"></Image>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center gap-10 sm:flex-row flex-col-reverse relative py-10 sm:py-0">
                    <div className="max-w-[450px] w-full">
                        <h1 className="sm:text-[32px] text-[24px] font-extrabold mb-3 text-center sm:text-start">Marketing Digital e Estratégias de Publicidade</h1>
                        <p className="sm:text-[16px] text-[14px] text-center sm:text-start">Saiba como impulsionar seus produtos com campanhas no Mercado Livre, Instagram e Facebook. Você vai aprender a investir pouco e atrair muitos — mesmo com orçamento apertado.</p>
                    </div>
                    <div>
                        <Image src={'/desktop-3.avif'} alt="desktop" width={1000} height={660} loading="lazy"></Image>
                    </div>
                    <div className="absolute z-[-1] bottom-[-140px] sm:block hidden xl:left-[200px] tv-hidden">
                        <Image src={'/lines-2.png'} alt="desktop" width={600} height={700} loading="lazy" className="xl:w-[950px]"></Image>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center gap-10 sm:flex-row flex-col relative py-10 sm:py-0">
                    <div>
                        <Image src={'/desktop-4.avif'} alt="desktop" width={1000} height={660} loading="lazy"></Image>
                    </div>
                    <div className="max-w-[450px] w-full">
                        <h1 className="sm:text-[32px] text-[24px] font-extrabold mb-3 text-center sm:text-start">Atendimento e Reputação no <span className="text-nowrap">E-commerce</span> e Logística de Envio</h1>
                        <p className="sm:text-[16px] text-[14px] text-center sm:text-start">Aprenda a lidar com clientes, manter sua reputação nas alturas e organizar envios com eficiência. Quem atende bem, vende mais — e por mais tempo.</p>
                    </div>

                    <div className="absolute z-[-1] bottom-[-290px] sm:block hidden xl:bottom-[-390px] xl:left-[200px] tv-hidden">
                        <Image src={'/lines-4.png'} alt="desktop" width={600} height={700} loading="lazy" className="xl:w-[950px]"></Image>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center gap-10 sm:flex-row flex-col-reverse pt-10 sm:py-0">
                    <div className="max-w-[450px] w-full">
                        <h1 className="sm:text-[32px] text-[24px] font-extrabold mb-3 text-center sm:text-start">Estrutura Organizacional e Papel do Gerente de <span className="text-nowrap">E-commerce</span></h1>
                        <p className="sm:text-[16px] text-[14px] mb-3 text-center sm:text-start">Você vai aprender como montar a estrutura do seu <span className="text-nowrap">e-commerce</span>, organizar processos e agir como um verdadeiro gerente, pronto para crescer com consistência.</p>
                        <LinkButton text="QUERO APRENDER A VENDER ONLINE" full></LinkButton>
                    </div>
                    <div>
                        <Image src={'/desktop-5.avif'} alt="desktop" width={1000} height={660} loading="lazy"></Image>
                    </div>
                </div>

            </div>
        </section>
    )
}