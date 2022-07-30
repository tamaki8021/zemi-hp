/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";

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
        <div class={tw`mt-12 inline-flex rounded-md shadow`}>
          <button
            type="button"
            class={tw`py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg`}
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};
