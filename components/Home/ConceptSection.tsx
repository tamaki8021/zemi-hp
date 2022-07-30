/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";

export const ConceptSection: FunctionComponent = () => {
  return (
    <section class={tw`bg-white dark:bg-gray-800 w-full mx-auto p-8`}>
      <img src="/icons/rocket.svg" class={tw`h-10 w-10 mb-8 m-auto`} />
      <p
        class={tw`text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-3xl`}
      >
        <span class={tw`font-bold text-indigo-500`}>“</span>
        To get social media testimonials like these, keep your customers engaged
        with your social media accounts by posting regularly yourself
        <span class={tw`font-bold text-indigo-500`}>”</span>
      </p>
    </section>
  );
};
