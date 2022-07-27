/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import LemonDrop from "../islands/LemonDrop.tsx";
import { Fotter } from "../components/Fotter.tsx";

export default function Home() {
  return (
    <html class="dark">
      <div class={tw`w-full h-screen dark:bg-black`}>
        <div class={tw`p-1 mx-auto max-w-screen-md `}>
          <section>
            <LemonDrop />
          </section>
          <p class={tw`my-6 dark:text-white`}>Welcome to mypage</p>
        </div>
        <Fotter />
      </div>
    </html>
  );
}
