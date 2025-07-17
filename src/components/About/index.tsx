'use client'
import Image from "next/image";
import { useState } from "react";

export default function About() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <section>
            <div className="flex flex-col lg:flex-row items-center p-5 sm:p-10 gap-10 justify-center">
                <div>
                    <h2 className="font-bold sm:text-[16px] text-[14px] pb-2">
                        Por que aprender com Doni muda o jogo?
                    </h2>
                    <h1 className="font-bold sm:text-[32px] text-[24px] mb-10">
                        Donizete Caetano
                    </h1>

                    <div className="flex flex-col items-start justify-start">
                        <div className="flex mb-3">
                            <button
                                onClick={() => setActiveTab(1)}
                                className={`py-3 px-2 sm:px-4 rounded-l-lg font-bold cursor-pointer sm:text-[16px] text-[12px] ${
                                    activeTab === 1
                                        ? 'bg-gradient text-black'
                                        : 'bg-[#444] text-[#ccc]'
                                }`}
                                aria-label="Botão fundador da tegbe"
                            >
                                Fundador da TegBe
                            </button>
                            <button
                                onClick={() => setActiveTab(2)}
                                className={`py-3 px-2 sm:px-4 rounded-r-lg font-bold cursor-pointer sm:text-[16px] text-[14px] ${
                                    activeTab === 2
                                        ? 'bg-gradient text-black'
                                        : 'bg-[#444] text-[#ccc]'
                                }`}
                                aria-label="Consultor oficial do mercado livre"
                            >
                                Consultor oficial do Mercado Livre
                            </button>
                        </div>

                        <div className="bg-[#2b2b2b] p-8 rounded-lg max-w-[700px]">
                            {activeTab === 1 && (
                                <p className="text-[#F0F0F0] flex flex-col gap-5">
                                    <span>Doni criou a Agência TegBe para ajudar empreendedores a venderem de forma prática e estratégica.</span>
                                    <span>A agência atua no estado de São Paulo, com foco em tráfego pago, criação de campanhas de alta performance e estruturação de vendas para produtos físicos.</span>
                                    <span>É da experiência direta com esses negócios que nasceu o método TegPro — validado no campo, com resultados reais.</span>
                                </p>
                            )}

                            {activeTab === 2 && (
                                <p className="text-[#F0F0F0] flex flex-col gap-5">
                                    <span>Consultor certificado oficialmente pelo Mercado Livre em vendas e estruturação de lojas na plataforma.</span>
                                    <span>Já ajudou dezenas de vendedores a crescerem no maior marketplace da América Latina, utilizando anúncios otimizados, posicionamento estratégico e técnicas práticas que aumentam visibilidade, tráfego e conversão.</span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-10 lg:mt-0">
                    <Image
                        src={'/doni.png'}
                        alt="Donizete Caetano, CEO Tegbe"
                        width={497}
                        height={872}
                    />
                </div>
            </div>
        </section>
    );
}
