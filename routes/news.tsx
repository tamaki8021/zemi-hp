/** @jsx h */
import { h } from "preact";
import { DefaultHead } from "../components/layout/DefaultHead.tsx";
import { Fotter } from "../components/layout/Fotter.tsx";
import { News } from "../components/pages/News.tsx";
import Header from "../islands/Header.tsx";

export default function NewsPage() {
  return (
    <html class="dark">
      <DefaultHead />
      <Header />
      <News />
      <Fotter />
    </html>
  );
}
