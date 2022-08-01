/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { TypingAnimation } from "./TypingAnimation.tsx";

export const TopSection: FunctionComponent = () => {
  return (
    <div
      class={tw`text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20`}
    >
      <h2
        class={tw`text-3xl font-extrabold text-black dark:text-white sm:text-4xl`}
      >
        <span class={tw`block`}>帝京大学 経済学部</span>
        <span class={tw`block`}>赤木ゼミナール</span>
      </h2>
      <div class={tw`lg:mt-0 lg:flex-shrink-0`}>
        <div class={tw`mt-6`}>
          <TypingAnimation />
        </div>
      </div>
    </div>
  );
};
