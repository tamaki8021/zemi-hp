/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import Particle from "../../islands/Particles.tsx";

type Props = {
  title: string;
  subTitle: string;
};

export const TopSection: FunctionComponent<Props> = ({ title, subTitle }) => {
  return (
    <section class={tw`w-full mx-auto py-16 sm:py-12 px-8 lg:px-20`}>
      <Particle />
      <h2
        class={tw`text-2xl font-extrabold text-black text-gray-100 sm:text-5xl mt-6 animate-pulse`}
      >
        <span class={tw`block`}>{title}</span>
        <span class={tw`block text-lg mt-3 text-gray-300`}>{subTitle}</span>
      </h2>
    </section>
  );
};
