/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { Item } from "./Item.tsx";

export const StepSection: FunctionComponent = () => {
  return (
    <section class={tw`bg-white dark:bg-gray-900`}>
      <div class={tw`container px-6 py-10 mx-auto`}>
        <h1
          class={tw`text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white`}
        >
          explore our <br /> awesome{" "}
          <span class={tw`text-blue-500`}>Components</span>
        </h1>

        <div
          class={tw`grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3`}
        >
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </section>
  );
};
