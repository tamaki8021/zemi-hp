/** @jsx h */
import { h } from "preact";
import { Fotter } from "../components/layout/Fotter.tsx";
import { Active } from "../components/pages/Active.tsx";
import Header from "../islands/Header.tsx";

export default function ActivePage() {
  return (
    <html class="dark">
      <Header />
      <Active />
      <Fotter />
    </html>
  );
}
