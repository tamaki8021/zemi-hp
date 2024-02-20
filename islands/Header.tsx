/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      class={tw`w-full flex items-center justify-between flex-wrap bg-black p-6 lg:px-20 fixed top-0 left-0 z-10 bg-black`}
    >
      <div class={tw`flex items-center text-white mr-6`}>
        <a href="/">
          <span class={tw`font-semibold text-xl tracking-tight`}>
            AKAGI SEMINAR
          </span>
        </a>
      </div>
      <div class={tw`block lg:hidden`}>
        <button
          class={tw`flex items-center px-3 py-2 rounded text-white focus:outline-none ${
            !isOpen && "border"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg class={tw`h-6 w-6 fill-current`} viewBox="0 0 24 24">
            {!isOpen ? (
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            ) : (
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            )}
          </svg>
        </button>
      </div>
      <div
        class={tw`w-full text-lg lg:flex lg:items-center lg:w-auto ${
          !isOpen && "hidden"
        }`}
      >
        <a
          href="/about"
          class={tw`block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-6 dark:text-white`}
        >
          About
        </a>
        <a
          href="/active"
          class={tw`block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-6 dark:text-white`}
        >
          Activity
        </a>
        <a
          href="/news"
          class={tw`block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-6 dark:text-white`}
        >
          News
        </a>
        <a
          href="/contact"
          class={tw`block mt-4 lg:inline-block lg:mt-0  hover:text-white dark:text-white`}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
