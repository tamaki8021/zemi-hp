/** @jsx h */
import { h } from "preact";
import { Fotter } from "../components/layout/Fotter.tsx";
import { About } from "../components/pages/About.tsx";
import Header from "../islands/Header.tsx";

export default function AboutPage() {
  return (
    <html class="dark">
      <Header />
      <About />
      <Fotter />
    </html>
  );
}
