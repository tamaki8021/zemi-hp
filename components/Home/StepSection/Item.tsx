/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";

type Props = {
  svgPath: string;
  title: string;
  contents: string;
};

export const Item: FunctionComponent<Props> = ({
  svgPath,
  title,
  contents,
}) => {
  return (
    <div
      class={tw`flex flex-col items-center px-6 md:px-8 py-12 space-y-3 text-center rounded-xl border border-gray-300`}
    >
      <span
        class={tw`inline-block p-3 text-blue-500 rounded-full dark:text-white bg-indigo-500 animate-bounce`}
      >
        <svg
          class={tw`h-10 w-10`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d={svgPath}
          ></path>
        </svg>
      </span>

      <h1
        class={tw`text-2xl font-semibold text-gray-700 capitalize dark:text-white`}
      >
        {title}
      </h1>

      <p class={tw`text-gray-500 dark:text-gray-300`}>{contents}</p>
    </div>
  );
};
