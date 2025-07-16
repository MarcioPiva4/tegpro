import Assessment from "@/components/Assessment";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionBanner from "@/components/SectionBanner";
import SectionImages from "@/components/SectionImages";
import SectionVideo from "@/components/SectionVideo";
import TableBenefits from "@/components/TableBenefits";

export default function Home() {

  return (
    <main>
      <Header></Header>
      <SectionBanner></SectionBanner>
      <SectionVideo></SectionVideo>
      <SectionImages></SectionImages>
      <TableBenefits></TableBenefits>
      <Assessment></Assessment>
      <Faq></Faq>
      <Footer></Footer>
    </main>

  );
}
