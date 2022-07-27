/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export const Fotter = () => {
  return (
    <footer
      class={tw`flex flex-col items-center justify-between px-6 py-4 bg-white dark:bg-black sm:flex-row`}
    >
      <a
        href="#"
        class={`text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300`}
      >
        赤木ゼミ
      </a>

      <p class={tw`py-2 text-gray-800 dark:text-white sm:py-0`}>
        Copyright © All rights reserved
      </p>
    </footer>
  );
};
