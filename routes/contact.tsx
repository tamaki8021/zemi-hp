/** @jsx h */
import { h } from "preact";
import { DefaultHead } from "../components/layout/DefaultHead.tsx";
import { Fotter } from "../components/layout/Fotter.tsx";
import { Contact } from "../components/pages/Contact.tsx";
import Header from "../islands/Header.tsx";

export default function ContactPage() {
  return (
    <html class="dark">
      <DefaultHead />
      <Header />
      <Contact />
      <Fotter />
    </html>
  );
}
