/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";

type Props = {
  title: string;
  subTitle: string;
};

export const TopSection: FunctionComponent<Props> = ({ title, subTitle }) => {
  return (
    <section class={tw`w-full mx-auto py-20 sm:py-12 px-4 sm:px-6 lg:px-8`}>
      <h2
        class={tw`text-2xl font-extrabold text-black text-gray-100 sm:text-5xl mt-6`}
      >
        <span class={tw`block`}>{title}</span>
        <span class={tw`block text-lg mt-3 text-gray-300`}>{subTitle}</span>
      </h2>
    </section>
  );
};
