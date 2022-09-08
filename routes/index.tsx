/** @jsx h */
import { h } from "preact";
import { Fotter } from "../components/layout/Fotter.tsx";
import Header from "../islands/Header.tsx";
import { Home } from "../components/pages/Home.tsx";
import { DefaultHead } from "../components/layout/DefaultHead.tsx";

export default function HomePage() {
  return (
    <html class="dark">
      <DefaultHead />
      <Header />
      <Home />
      <Fotter />
    </html>
  );
}
