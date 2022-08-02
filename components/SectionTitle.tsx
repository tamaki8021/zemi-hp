/** @jsx h */
/** @jsxFrag Fragment */
import { h, FunctionComponent, Fragment } from "preact";
import { tw } from "@twind";

type Props = {
  title: string;
};

export const SectionTitle: FunctionComponent<Props> = ({ title }) => {
  return (
    <>
      <h2
        class={tw`text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white`}
      >
        {title}
      </h2>
      <hr
        class={tw`w-3/4 md:w-1/3 max-w-sm border-white mx-auto my-5 border-indigo-500 border animate-pulse`}
      />
    </>
  );
};
