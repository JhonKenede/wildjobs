import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { ContactForm } from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <ContactForm />
      <Footer />
    </>
  );
}
