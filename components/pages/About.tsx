/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import Particles from "../../islands/Particles.tsx";

export const About: FunctionComponent = () => {
  return (
    <div
      class={tw`w-full bg-black h-screen flex flex-col justify-center items-center`}
    >
      <div class={tw`pt-24 p-8`}>
        <section class={tw`max-w-3xl text-white `}>
          <Particles />
          <p class={tw`text-4xl md:text-9xl font-extrabold`}>COMMING SOON</p>
        </section>
      </div>
    </div>
  );
};
