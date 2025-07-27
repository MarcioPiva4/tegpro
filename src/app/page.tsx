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

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <SectionBanner></SectionBanner>
        <SectionVideo></SectionVideo>
        <SectionImages></SectionImages>
        <Assessment></Assessment>
        <SectionLearn></SectionLearn>
        <About></About>
        <TableBenefits></TableBenefits>
        <Faq></Faq>
      </main>
      <Footer></Footer>
      <ButtonWhatsapp></ButtonWhatsapp>
    </>
  );
}
