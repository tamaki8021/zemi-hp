/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { Item } from "./Item.tsx";
import { SectionTitle } from "../../SectionTitle.tsx";

export const NewsSection: FunctionComponent = () => {
  return (
    <section class={tw` container px-8 py-16 md:py-24 mx-auto`}>
      <SectionTitle title={"NEWS"} />

      <div class={tw`shadow overflow-hidden sm:rounded-md mt-8 md:mt-12`}>
        <ul class={tw`divide-y divide-gray-200`}>
          <Item
            title={"Increase newsletter subscribers by 500"}
            date={"January 7, 2020"}
          />
          <Item
            title={"Increase newsletter subscribers by 500"}
            date={"Jun 14, 2020"}
          />
          <Item
            title={"Increase customer satisfaction rating by 10 points"}
            date={"December 10, 2020"}
          />
        </ul>
      </div>
    </section>
  );
};
