'use client'
import Image from "next/image";
import { useState } from "react";

export default function SectionVideo(){
    const [showVideo, setShowVideo] = useState(false);
    return(
        <section className="py-10 mb-10">
            <div className="flex justify-center items-center flex-col text-center sm:px-10 px-5 max-w-[1000px] m-auto">
                <h1 className="mb-5 sm:text-[32px] text-[24px] font-semibold text-wrap lg:text-nowrap">Quer saber se o TegPro é pra você? Assista ao vídeo abaixo.</h1>
                <figure
                    className="w-full max-w-[644px] aspect-video flex items-center justify-center rounded-[10px] overflow-hidden bg-black relative group cursor-pointer"
                    onClick={() => setShowVideo(true)}>
                    {showVideo ? (
                        <iframe loading="lazy" width="882" height="496" src="https://www.youtube.com/embed/hfJMWlZ0GhY" title="Curso Gestão de E-commerce Tegpro" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    ) : (
                        <>
                        <img
                            src="https://img.youtube.com/vi/hfJMWlZ0GhY/hqdefault.jpg"
                            alt="Preview do vídeo Tegpro"
                            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute top-1/2 left-1/2 w-[48px] h-[48px] -translate-x-1/2 -translate-y-1/2 bg-[url('https://cdn-icons-png.flaticon.com/512/727/727245.png')] bg-no-repeat bg-center bg-contain pointer-events-none" />
                        </div>
                        </>
                    )}
                </figure>
            </div>
        </section>
    )
}