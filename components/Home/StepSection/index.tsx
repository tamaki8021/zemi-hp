/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { Item } from "./Item.tsx";
import { SectionTitle } from "../../SectionTitle.tsx";

export const StepSection: FunctionComponent = () => {
  return (
    <section class={tw`container px-8 py-16 md:py-24 mx-auto`}>
      <SectionTitle title={"ゼミ四半期の流れ"} />

      <div
        class={tw`grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3`}
      >
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
};
