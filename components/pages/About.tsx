/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { TopSection } from "../TopSection.tsx";

export const About: FunctionComponent = () => {
  return (
    <div class={tw`w-full mx-auto bg-black pt-10`}>
      <TopSection title={"About"} subTitle={"ゼミについて"} />
      <div
        class={tw`w-full h-screen bg-black flex flex-col justify-center items-center bg-black relative`}
      >
        <div class={tw`pt-24 p-8`}>
          <section class={tw`max-w-3xl text-white `}>
            <p class={tw`text-4xl md:text-9xl font-extrabold`}>COMMING SOON . . .</p>
          </section>
        </div>
      </div>
    </div>
  );
};
