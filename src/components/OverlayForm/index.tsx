"use client";

import { useEffect, useState } from "react";

export default function OverlayForm() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setShowForm(window.location.hash === "#form");
    };

    checkHash();

    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showForm]);

  if (!showForm) return null;

  return (
    <div className="bg-black fixed top-0 left-0 flex justify-center items-center w-full h-full z-[100000]">
      <button
        aria-label="Botão de voltar a página inicial"
        className="absolute top-[40px] left-[40px] w-[50px] h-[50px] flex justify-center items-center cursor-pointer"
        onClick={() => {
          history.pushState(null, "", window.location.pathname + window.location.search);
          setShowForm(false);
        }}>
        <svg
          width="21"
          height="17"
          viewBox="0 0 21 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.310059 8.33336L8.15506 16.1784C8.3098 16.3331 8.4935 16.4558 8.69568 16.5396C8.89786 16.6233 9.11456 16.6664 9.33339 16.6664C9.55223 16.6664 9.76892 16.6233 9.9711 16.5396C10.1733 16.4558 10.357 16.3331 10.5117 16.1784C10.6665 16.0236 10.7892 15.8399 10.873 15.6377C10.9567 15.4356 10.9998 15.2189 10.9998 15C10.9998 14.7812 10.9567 14.5645 10.873 14.3623C10.7892 14.1601 10.6665 13.9764 10.5117 13.8217L6.69006 10H19.3334C19.7754 10 20.1993 9.82443 20.5119 9.51187C20.8245 9.19931 21.0001 8.77539 21.0001 8.33336C21.0001 7.89133 20.8245 7.46741 20.5119 7.15485C20.1993 6.84229 19.7754 6.66669 19.3334 6.66669H6.69006L10.5117 2.84503C10.667 2.69061 10.7903 2.507 10.8744 2.30478C10.9585 2.10256 11.0018 1.88571 11.0018 1.66669C11.0018 1.44768 10.9585 1.23083 10.8744 1.02861C10.7903 0.826385 10.667 0.642782 10.5117 0.488359C10.1992 0.175907 9.77533 0.000383377 9.33339 0.000383377C8.89145 0.000383377 8.4676 0.175907 8.15506 0.488359L0.310059 8.33336Z"
            fill="white"
          />
        </svg>
      </button>
      <div className="formulario">
        <h1 className="text-[40px]">IS WHERE THE FORM?</h1>
      </div>
    </div>
  );
}
