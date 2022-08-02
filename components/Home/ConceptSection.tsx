/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { SectionTitle } from "../common/index.ts";

export const ConceptSection: FunctionComponent = () => {
  return (
    <section class={tw`w-full mx-auto relative bg-black`}>
      <div class={tw`px-8 py-16 lg:p-24`}>
        <SectionTitle title={"WHAT WE CAN DO"} />

        <p
          class={tw`text-white font-extrabold w-full text-center sm:text-lg md:text-2xl mt-8 md:mt-12 animate-pulse`}
        >
          <span class={tw`font-bold text-indigo-500`}>“</span>
          変態、クリエイティブ、ニュータイプ
          <span class={tw`font-bold text-indigo-500`}>”</span>
        </p>
        <p
          class={tw`text-white md:w-3/4 m-auto text-center md:text-xl mt-8 md:mt-12`}
        >
          帝京大学経済学部　赤木ゼミでは、「変態、クリエイティブ、ニュータイプ」をキーワードとして、周りに流されずに、個性を表現できるような人など将来を生き抜くことができる多様な人材になることを目指して活動していきます。
        </p>
      </div>
    </section>
  );
};
