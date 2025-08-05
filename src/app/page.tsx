'use client'
import About from "@/components/About";
import Assessment from "@/components/Assessment";
import ButtonWhatsapp from "@/components/ButtonWhatsapp";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionBanner from "@/components/SectionBanner";
import SectionImages from "@/components/SectionImages";
import SectionLearn from "@/components/SectionLearn";
import SectionVideo from "@/components/SectionVideo";
import TableBenefits from "@/components/TableBenefits";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [cityParam, setCityParam] = useState('Garça');

  useEffect(() => {
    const cidadePadrao = 'Garça';

    const params = new URLSearchParams(window.location.search);
    const existingCity = params.get('city');
    if (existingCity) {
      setCityParam(existingCity);
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const fetchCity = async () => {
            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
              );
              const data = await response.json();

              const city =
                data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.hamlet;

              if (city) {
                setCityParam(city);
                const cityEncoded = encodeURIComponent(city);
                router.replace(`/?city=${cityEncoded}`);
              } else {
                router.replace(`/?city=${encodeURIComponent(cidadePadrao)}`);
              }
            } catch (err) {
              router.replace(`/?city=${encodeURIComponent(cidadePadrao)}`);
            }
          };

          fetchCity();
        },
        () => {
          router.replace(`/?city=${encodeURIComponent(cidadePadrao)}`);
        }
      );
    } else {
      router.replace(`/?city=${encodeURIComponent(cidadePadrao)}`);
    }
  }, [router]);

  return (
    <>
      <Header />
      <main>
        <SectionBanner city={cityParam} />
        <SectionVideo />
        <SectionImages />
        <Assessment />
        <SectionLearn />
        <About />
        <TableBenefits />
        <Faq />
      </main>
      <Footer />
      <ButtonWhatsapp />
    </>
  );
}
