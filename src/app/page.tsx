import Assessment from "@/components/Assessment";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import SectionBanner from "@/components/SectionBanner";
import SectionVideo from "@/components/SectionVideo";

export default function Home() {

  return (
    <main>
      <SectionBanner></SectionBanner>
      <SectionVideo></SectionVideo>
      <Assessment></Assessment>
      <Faq></Faq>
      <Footer></Footer>
    </main>

  );
}
