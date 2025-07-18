"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";

export default function Assessment() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

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
  return (
    <section className="flex flex-col justify-center items-center p-5 py-10">
      <span className="text-[18px] text-[var(--primary)] uppercase mb-5">
        está duvidando??
      </span>
      <h1 className="sm:text-[32px] text-[24px] mb-10 uppercase max-w-[500px] text-center">Eles também duvidaram. Agora estão vendendo.</h1>

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
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <SwiperSlide key={i}>
              <div className="relative flex justify-end align-end h-full w-full">
                <div className="absolute top-0 left-0 w-full h-full z-[-1] rounded-2xl overflow-hidden">
                  <Image
                    src={"/assessment-1.avif"}
                    alt="card de avaliação"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={500}
                    height={500}></Image>
                </div>
                <div className="flex flex-col justify-center items-center bg-white rounded-2xl text-[var(--text-secondary)] pb-5 pt-7 px-4 absolute bottom-0 mx-5 mb-5">
                  <figure className="bg-white absolute top-[-32px] rounded-full p-2">
                    <Image
                      src={"/assessment-icon.avif"}
                      alt="card de avaliação"
                      className="w-auto h-auto rounded-full"
                      width={50}
                      height={50}></Image>
                  </figure>
                  <h2 className="text-[18px] font-semibold text-center">
                    Orlando Pinto de almeida neto
                  </h2>
                  <span className="text-[12px]">CEO Casas Bahia</span>
                  <p className="text-[14px] my-4 text-center">
                    “Comecei do zero e em 2 meses fiz minha primeira venda. O
                    curso é direto e prático!”
                  </p>
                  <div className="flex items-center gap-[6px]">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.95203 7.3535C9.80094 7.49991 9.73153 7.71166 9.76594 7.91933L10.2845 10.7893C10.3283 11.0326 10.2256 11.2787 10.022 11.4193C9.82253 11.5652 9.55711 11.5827 9.33953 11.466L6.75594 10.1185C6.66611 10.0707 6.56636 10.045 6.46428 10.0421H6.30619C6.25136 10.0502 6.19769 10.0677 6.14869 10.0946L3.56453 11.4485C3.43678 11.5127 3.29211 11.5354 3.15036 11.5127C2.80503 11.4473 2.57461 11.1183 2.63119 10.7712L3.15036 7.90125C3.18478 7.69183 3.11536 7.47891 2.96428 7.33016L0.85786 5.2885C0.681693 5.11758 0.620443 4.86091 0.700943 4.62933C0.77911 4.39833 0.97861 4.22975 1.21953 4.19183L4.11869 3.77125C4.33919 3.7485 4.53286 3.61433 4.63203 3.416L5.90953 0.79683C5.93986 0.738496 5.97894 0.684829 6.02619 0.639329L6.07869 0.598496C6.10611 0.568163 6.13761 0.543079 6.17261 0.522663L6.23619 0.499329L6.33536 0.458496H6.58094C6.80028 0.481246 6.99336 0.612496 7.09428 0.808496L8.38869 3.416C8.48203 3.60675 8.66344 3.73916 8.87286 3.77125L11.772 4.19183C12.017 4.22683 12.2218 4.396 12.3029 4.62933C12.3793 4.86325 12.3134 5.11991 12.1337 5.2885L9.95203 7.3535Z"
                        fill="#C9A050"
                      />
                    </svg>
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.95203 7.3535C9.80094 7.49991 9.73153 7.71166 9.76594 7.91933L10.2845 10.7893C10.3283 11.0326 10.2256 11.2787 10.022 11.4193C9.82253 11.5652 9.55711 11.5827 9.33953 11.466L6.75594 10.1185C6.66611 10.0707 6.56636 10.045 6.46428 10.0421H6.30619C6.25136 10.0502 6.19769 10.0677 6.14869 10.0946L3.56453 11.4485C3.43678 11.5127 3.29211 11.5354 3.15036 11.5127C2.80503 11.4473 2.57461 11.1183 2.63119 10.7712L3.15036 7.90125C3.18478 7.69183 3.11536 7.47891 2.96428 7.33016L0.85786 5.2885C0.681693 5.11758 0.620443 4.86091 0.700943 4.62933C0.77911 4.39833 0.97861 4.22975 1.21953 4.19183L4.11869 3.77125C4.33919 3.7485 4.53286 3.61433 4.63203 3.416L5.90953 0.79683C5.93986 0.738496 5.97894 0.684829 6.02619 0.639329L6.07869 0.598496C6.10611 0.568163 6.13761 0.543079 6.17261 0.522663L6.23619 0.499329L6.33536 0.458496H6.58094C6.80028 0.481246 6.99336 0.612496 7.09428 0.808496L8.38869 3.416C8.48203 3.60675 8.66344 3.73916 8.87286 3.77125L11.772 4.19183C12.017 4.22683 12.2218 4.396 12.3029 4.62933C12.3793 4.86325 12.3134 5.11991 12.1337 5.2885L9.95203 7.3535Z"
                        fill="#C9A050"
                      />
                    </svg>

                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.95203 7.3535C9.80094 7.49991 9.73153 7.71166 9.76594 7.91933L10.2845 10.7893C10.3283 11.0326 10.2256 11.2787 10.022 11.4193C9.82253 11.5652 9.55711 11.5827 9.33953 11.466L6.75594 10.1185C6.66611 10.0707 6.56636 10.045 6.46428 10.0421H6.30619C6.25136 10.0502 6.19769 10.0677 6.14869 10.0946L3.56453 11.4485C3.43678 11.5127 3.29211 11.5354 3.15036 11.5127C2.80503 11.4473 2.57461 11.1183 2.63119 10.7712L3.15036 7.90125C3.18478 7.69183 3.11536 7.47891 2.96428 7.33016L0.85786 5.2885C0.681693 5.11758 0.620443 4.86091 0.700943 4.62933C0.77911 4.39833 0.97861 4.22975 1.21953 4.19183L4.11869 3.77125C4.33919 3.7485 4.53286 3.61433 4.63203 3.416L5.90953 0.79683C5.93986 0.738496 5.97894 0.684829 6.02619 0.639329L6.07869 0.598496C6.10611 0.568163 6.13761 0.543079 6.17261 0.522663L6.23619 0.499329L6.33536 0.458496H6.58094C6.80028 0.481246 6.99336 0.612496 7.09428 0.808496L8.38869 3.416C8.48203 3.60675 8.66344 3.73916 8.87286 3.77125L11.772 4.19183C12.017 4.22683 12.2218 4.396 12.3029 4.62933C12.3793 4.86325 12.3134 5.11991 12.1337 5.2885L9.95203 7.3535Z"
                        fill="#C9A050"
                      />
                    </svg>

                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.95203 7.3535C9.80094 7.49991 9.73153 7.71166 9.76594 7.91933L10.2845 10.7893C10.3283 11.0326 10.2256 11.2787 10.022 11.4193C9.82253 11.5652 9.55711 11.5827 9.33953 11.466L6.75594 10.1185C6.66611 10.0707 6.56636 10.045 6.46428 10.0421H6.30619C6.25136 10.0502 6.19769 10.0677 6.14869 10.0946L3.56453 11.4485C3.43678 11.5127 3.29211 11.5354 3.15036 11.5127C2.80503 11.4473 2.57461 11.1183 2.63119 10.7712L3.15036 7.90125C3.18478 7.69183 3.11536 7.47891 2.96428 7.33016L0.85786 5.2885C0.681693 5.11758 0.620443 4.86091 0.700943 4.62933C0.77911 4.39833 0.97861 4.22975 1.21953 4.19183L4.11869 3.77125C4.33919 3.7485 4.53286 3.61433 4.63203 3.416L5.90953 0.79683C5.93986 0.738496 5.97894 0.684829 6.02619 0.639329L6.07869 0.598496C6.10611 0.568163 6.13761 0.543079 6.17261 0.522663L6.23619 0.499329L6.33536 0.458496H6.58094C6.80028 0.481246 6.99336 0.612496 7.09428 0.808496L8.38869 3.416C8.48203 3.60675 8.66344 3.73916 8.87286 3.77125L11.772 4.19183C12.017 4.22683 12.2218 4.396 12.3029 4.62933C12.3793 4.86325 12.3134 5.11991 12.1337 5.2885L9.95203 7.3535Z"
                        fill="#C9A050"
                      />
                    </svg>

                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.95203 7.3535C9.80094 7.49991 9.73153 7.71166 9.76594 7.91933L10.2845 10.7893C10.3283 11.0326 10.2256 11.2787 10.022 11.4193C9.82253 11.5652 9.55711 11.5827 9.33953 11.466L6.75594 10.1185C6.66611 10.0707 6.56636 10.045 6.46428 10.0421H6.30619C6.25136 10.0502 6.19769 10.0677 6.14869 10.0946L3.56453 11.4485C3.43678 11.5127 3.29211 11.5354 3.15036 11.5127C2.80503 11.4473 2.57461 11.1183 2.63119 10.7712L3.15036 7.90125C3.18478 7.69183 3.11536 7.47891 2.96428 7.33016L0.85786 5.2885C0.681693 5.11758 0.620443 4.86091 0.700943 4.62933C0.77911 4.39833 0.97861 4.22975 1.21953 4.19183L4.11869 3.77125C4.33919 3.7485 4.53286 3.61433 4.63203 3.416L5.90953 0.79683C5.93986 0.738496 5.97894 0.684829 6.02619 0.639329L6.07869 0.598496C6.10611 0.568163 6.13761 0.543079 6.17261 0.522663L6.23619 0.499329L6.33536 0.458496H6.58094C6.80028 0.481246 6.99336 0.612496 7.09428 0.808496L8.38869 3.416C8.48203 3.60675 8.66344 3.73916 8.87286 3.77125L11.772 4.19183C12.017 4.22683 12.2218 4.396 12.3029 4.62933C12.3793 4.86325 12.3134 5.11991 12.1337 5.2885L9.95203 7.3535Z"
                        fill="#C9A050"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          aria-label="Botão anterior do carrossel"
          ref={prevRef}
          className="swiper-button-prev-custom absolute left-[-20px] top-[140px] z-10 bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer">
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.1958 8.13714H1.98568M1.98568 8.13714C1.98568 8.13714 6.86397 4.92891 7.85524 2.26758M1.98568 8.13714C1.98568 8.13714 6.29826 11.1517 7.85524 14.0067"
              stroke="#1E1E1E"
              strokeWidth="2.17391"
              strokeLinecap="square"
            />
          </svg>
        </button>
        <button
          aria-label="Botão proximo do carrossel"
          ref={nextRef}
          className="swiper-button-prev-custom absolute right-[-20px] top-[140px] z-10 bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer">
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.8042 8.13714H19.0143M19.0143 8.13714C19.0143 8.13714 14.136 4.92891 13.1448 2.26758M19.0143 8.13714C19.0143 8.13714 14.7017 11.1517 13.1448 14.0067"
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
