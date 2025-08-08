import Hero from "@/component/layout/hero";
import { Header } from "@/component/layout/header";
import { Footer } from "@/component/layout/footer";
import HowItWorks from "@/component/layout/howItWork";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Footer />
    </>
  );
}
