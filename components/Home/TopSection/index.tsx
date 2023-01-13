/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { TypingAnimation } from "./TypingAnimation.tsx";
import Particle from "../../../islands/Particles.tsx";

export const TopSection: FunctionComponent = () => {
  return (
    <div
      class={tw`text-center w-full mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8`}
    >
      {/* <Particle /> */}
      <h2
        class={tw`text-3xl font-extrabold text-black text-gray-100 sm:text-5xl hover:animate-ping mt-6`}
      >
        <span class={tw`block`}>帝京大学 経済学部</span>
        <span class={tw`block`}>赤木ゼミナール</span>
      </h2>
      <TypingAnimation />
    </div>
  );
};
