/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";

export const Item: FunctionComponent = () => {
  return (
    <div
      class={tw`flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800`}
    >
      <span
        class={tw`inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class={tw`w-6 h-6`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      </span>

      <h1
        class={tw`text-2xl font-semibold text-gray-700 capitalize dark:text-white`}
      >
        Copy & paste components
      </h1>

      <p class={tw`text-gray-500 dark:text-gray-300`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab
        nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
      </p>
    </div>
  );
};
