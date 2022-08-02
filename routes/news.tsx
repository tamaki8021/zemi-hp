/** @jsx h */
import { h } from "preact";
import { Fotter } from "../components/layout/Fotter.tsx";
import { News } from "../components/pages/News.tsx";
import Header from "../islands/Header.tsx";

export default function NewsPage() {
  return (
    <html class="dark">
      <Header />
      <News />
      <Fotter />
    </html>
  );
}
