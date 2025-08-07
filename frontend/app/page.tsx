import Hero from "@/component/hero";
import { Header } from "@/component/header";
import { Footer } from "@/component/footer";
import HowItWorks from "@/component/howItWork";
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
