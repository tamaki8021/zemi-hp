/** @jsx h */
import { h } from "preact";
import { Fotter } from "../components/layout/Fotter.tsx";
import Header from "../islands/Header.tsx";
import { Home } from "../components/pages/Home.tsx";

export default function HomePage() {
  return (
    <html class="dark">
      <Header />
      <Home />
      <Fotter />
    </html>
  );
}
