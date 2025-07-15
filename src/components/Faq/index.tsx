"use client";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Eu nunca vendi nada online. Esse curso é pra mim?",
    answer:
      "Sim! O curso foi pensado para quem está começando do zero. Você vai aprender passo a passo, com orientação prática e linguagem clara.",
  },
  {
    id: 2,
    question: "O curso é presencial ou online?",
    answer:
      "100% presencial. As aulas acontecem em Marília/SP, com encontros semanais, práticas e acompanhamento individual.",
  },
  {
    id: 3,
    question: "Vou sair do curso já vendendo?",
    answer:
      "Sim — essa é a proposta. Durante as aulas, você vai criar seus anúncios, aplicar as estratégias e começar a vender de verdade, com o acompanhamento do mentor.",
  },
  {
    id: 4,
    question: "Em quais plataformas eu vou aprender a vender?",
    answer:
      "Você aprenderá a vender no Mercado Livre, Instagram e Facebook, além de entender como funciona o e-commerce de verdade.",
  },
  {
    id: 5,
    question: "E se eu não gostar do curso?",
    answer:
      "Você tem 7 dias de garantia total. Se participar da primeira aula e não sentir que o curso é pra você, devolvemos 100% do valor investido. Sem burocracia.",
  },
  {
    id: 6,
    question: "Qual o valor e forma de pagamento?",
    answer:
      "O investimento é de R$ 897,00 em até 10x no cartão, ou R$ 797,00 à vista via Pix. Inclui certificado, grupo de suporte e materiais bônus.",
  },
  {
    id: 7,
    question: "Quantas pessoas tem na turma?",
    answer:
      "As turmas são reduzidas, para garantir atenção individual. Vagas realmente limitadas.",
  },
  {
    id: 8,
    question: "Recebo algum certificado?",
    answer:
      "Sim! Ao final do curso, você recebe um certificado de conclusão reconhecendo sua participação e habilidades desenvolvidas.",
  },
  {
    id: 9,
    question: "Preciso ter um produto físico já?",
    answer:
      "Não precisa. Você pode participar mesmo sem produto. Vamos te ensinar como validar nichos e identificar produtos com demanda real.",
  },
  {
    id: 10,
    question: "Tem suporte fora das aulas?",
    answer:
      "Sim. Você terá acesso a um grupo exclusivo no WhatsApp com o mentor e os colegas para tirar dúvidas e compartilhar resultados.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<{ id: number | null; open: boolean }>({
    id: null,
    open: false,
  });
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center max-w-[1000px] w-full px-5 py-10">
        <h2 className="text-center w-full text-white text-2xl font-semibold mb-8 sm:text-3xl">
          Perguntas frequentes
        </h2>
        {faqs.map((e) => (
          <div
            className="flex flex-col w-full bg-[var(--secondary)] p-5 rounded-lg mb-3"
            onClick={() =>
              open.id == e.id
                ? setOpen({ id: null, open: false })
                : setOpen({ id: e.id, open: true })
            }
            key={e.id}>
            <div className="flex justify-between items-center gap-2">
              <p className="text-[var(--primary)] text-sm sm:text-base font-bold">{e.question}</p>
              <button
                className={`cursor-pointer transition-all ${
                  e.id == open.id && open.open ? "rotate-[-90deg]" : ""
                }`}>
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.79282 0.332031L9.20703 1.74624L3.41414 7.53914L9.20703 13.332L7.79282 14.7462L0.585711 7.53914L7.79282 0.332031Z"
                    fill="#F0F0F0"
                  />
                </svg>
              </button>
            </div>
            {e.id == open.id && open.open && (
              <div className="block w-full mt-4">
                <p className="font-medium text-xs sm:text-base">{e.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
