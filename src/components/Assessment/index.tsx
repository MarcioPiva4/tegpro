"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";

export default function Assessment() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null);

  const videos = [
    {
      src: "https://www.youtube.com/embed/yV0npIB_8os",
      title: "Depoimento Anelize - Aluna Tegpro",
      nome: "Depoimento Aneliza",
      cargo: "Aluna Tegpro",
    },
    {
      src: "https://www.youtube.com/embed/OLGGY4OErOQ",
      title: "Depoimento João - Aluno Tegpro",
      nome: "Depoimento João",
      cargo: "Aluno Tegpro",
    },
    {
      src: "https://www.youtube.com/embed/RWEfeLDd5zE",
      title: "Depoimento Thamires - Aluna Tegpro",
      nome: "Depoimento Thamires",
      cargo: "Aluna Tegpro",
    },
  ];

  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params.navigation &&
      typeof swiperInstance.params.navigation === "object"
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  // Função para extrair o ID do YouTube da URL do embed
  function getYouTubeID(url: string) {
    const regex = /embed\/([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : "";
  }

  return (
    <section className="flex flex-col justify-center items-center p-5 py-10">
      <span className="text-[18px] text-[var(--primary)] uppercase mb-5">
        está duvidando?
      </span>
      <h1 className="sm:text-[32px] text-[24px] mb-10 uppercase max-w-[500px] text-center">
        Eles também duvidaram. Agora estão vendendo.
      </h1>

      <div className="w-full max-w-[1200px] h-[500px] relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          className="w-full h-full relative"
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            750: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={setSwiperInstance}
        >
          {videos.map((video, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative flex justify-center items-center h-full w-full group cursor-pointer rounded-2xl overflow-hidden"
                onClick={() => setActiveSlideIndex(i)}
              >
                {activeSlideIndex === i ? (
                  <iframe
                    width="370"
                    height="500"
                    className="rounded-2xl"
                    src={video.src + "?autoplay=1"}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={`https://img.youtube.com/vi/${getYouTubeID(
                        video.src
                      )}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                    />
                    <button
                      aria-label={`Tocar vídeo ${video.title}`}
                      className="absolute inset-0 flex justify-center items-center bg-black/50 rounded-2xl transition-opacity hover:bg-opacity-60"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlideIndex(i);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-16 h-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={prevRef}
          className="absolute left-[-20px] top-[140px] z-10 bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer"
        >
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.1958 14.017H4.98568M4.98568 14.017C4.98568 14.017 9.86397 10.8088 10.8552 8.14746M4.98568 14.017C4.98568 14.017 9.29826 17.0316 10.8552 19.8866"
              stroke="#1E1E1E"
              strokeWidth="2.17391"
              strokeLinecap="square"
            />
          </svg>
        </button>
        <button
          ref={nextRef}
          className="absolute right-[-20px] top-[140px] z-10 bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer"
        >
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.8042 14.017H22.0143M22.0143 14.017C22.0143 14.017 17.136 10.8088 16.1448 8.14746M22.0143 14.017C22.0143 14.017 17.7017 17.0316 16.1448 19.8866"
              stroke="#1E1E1E"
              strokeWidth="2.17391"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
