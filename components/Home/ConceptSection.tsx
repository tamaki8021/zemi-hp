/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { SectionTitle } from "../SectionTitle.tsx";

export const ConceptSection: FunctionComponent = () => {
  return (
    <section class={tw`w-full mx-auto relative bg-black`}>
      <div class={tw`px-8 py-16 lg:p-24`}>
        <SectionTitle title={"WHAT WE CAN DO"} />

        <p
          class={tw`text-white w-full md:w-2/3 m-auto text-center text-2xl md:text-3xl mt-8 md:mt-12`}
        >
          <span class={tw`font-bold text-indigo-500`}>“</span>
          To get social media testimonials like these, keep your customers
          engaged with your social media accounts by posting regularly yourself
          <span class={tw`font-bold text-indigo-500`}>”</span>
        </p>
      </div>
    </section>
  );
};
