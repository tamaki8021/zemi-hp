/** @jsx h */
import { h } from "preact";
import { Fotter } from "../components/layout/Fotter.tsx";
import { Contact } from "../components/pages/Contact.tsx";
import Header from "../islands/Header.tsx";

export default function ContactPage() {
  return (
    <html class="dark">
      <Header />
      <Contact />
      <Fotter />
    </html>
  );
}
