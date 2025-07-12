"use client";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Eu nunca vendi nada online. Esse curso é pra mim?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id rutrum nunc, id cursus metus. Cras fringilla massa non hendrerit convallis. Sed eu libero molestie, iaculis odio sit amet, vestibulum tortor. Donec elit urna, molestie sit amet efficitur a, placerat nec dolor. In luctus justo eu urna faucibus, ac euismod leo tempus.",
  },
  {
    id: 2,
    question: "O curso é presencial ou online?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id rutrum nunc, id cursus metus. Cras fringilla massa non hendrerit convallis. Sed eu libero molestie, iaculis odio sit amet, vestibulum tortor. Donec elit urna, molestie sit amet efficitur a, placerat nec dolor. In luctus justo eu urna faucibus, ac euismod leo tempus.",
  },
  {
    id: 3,
    question: "Vou sair do curso já vendendo?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id rutrum nunc, id cursus metus. Cras fringilla massa non hendrerit convallis. Sed eu libero molestie, iaculis odio sit amet, vestibulum tortor. Donec elit urna, molestie sit amet efficitur a, placerat nec dolor. In luctus justo eu urna faucibus, ac euismod leo tempus.",
  },
  {
    id: 4,
    question: "Em quais plataformas eu vou aprender a vender?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id rutrum nunc, id cursus metus. Cras fringilla massa non hendrerit convallis. Sed eu libero molestie, iaculis odio sit amet, vestibulum tortor. Donec elit urna, molestie sit amet efficitur a, placerat nec dolor. In luctus justo eu urna faucibus, ac euismod leo tempus.",
  },
  {
    id: 5,
    question: "E se eu não gostar do curso?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id rutrum nunc, id cursus metus. Cras fringilla massa non hendrerit convallis. Sed eu libero molestie, iaculis odio sit amet, vestibulum tortor. Donec elit urna, molestie sit amet efficitur a, placerat nec dolor. In luctus justo eu urna faucibus, ac euismod leo tempus.",
  },
  {
    id: 6,
    question: "Qual o valor e forma de pagamento?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id rutrum nunc, id cursus metus. Cras fringilla massa non hendrerit convallis. Sed eu libero molestie, iaculis odio sit amet, vestibulum tortor. Donec elit urna, molestie sit amet efficitur a, placerat nec dolor. In luctus justo eu urna faucibus, ac euismod leo tempus.",
  },
  {
    id: 7,
    question: "Quantas pessoas tem na turma?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id rutrum nunc, id cursus metus. Cras fringilla massa non hendrerit convallis. Sed eu libero molestie, iaculis odio sit amet, vestibulum tortor. Donec elit urna, molestie sit amet efficitur a, placerat nec dolor. In luctus justo eu urna faucibus, ac euismod leo tempus.",
  },
  {
    id: 8,
    question: "Recebo algum certificado?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id rutrum nunc, id cursus metus. Cras fringilla massa non hendrerit convallis. Sed eu libero molestie, iaculis odio sit amet, vestibulum tortor. Donec elit urna, molestie sit amet efficitur a, placerat nec dolor. In luctus justo eu urna faucibus, ac euismod leo tempus.",
  },
  {
    id: 9,
    question: "Preciso ter um produto físico já?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id rutrum nunc, id cursus metus. Cras fringilla massa non hendrerit convallis. Sed eu libero molestie, iaculis odio sit amet, vestibulum tortor. Donec elit urna, molestie sit amet efficitur a, placerat nec dolor. In luctus justo eu urna faucibus, ac euismod leo tempus.",
  },
  {
    id: 10,
    question: "Tem suporte fora das aulas?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id rutrum nunc, id cursus metus. Cras fringilla massa non hendrerit convallis. Sed eu libero molestie, iaculis odio sit amet, vestibulum tortor. Donec elit urna, molestie sit amet efficitur a, placerat nec dolor. In luctus justo eu urna faucibus, ac euismod leo tempus.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<{ id: number | null; open: boolean }>({
    id: null,
    open: false,
  });
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center max-w-[800px] w-full px-5 py-10">
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
