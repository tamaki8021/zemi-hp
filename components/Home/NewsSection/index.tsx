/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { Item } from "./Item.tsx";
import { SectionTitle } from "../../common/index.ts";

export const NewsSection: FunctionComponent = () => {
  return (
    <section class={tw`w-full relative bg-black`}>
      <div class={tw`px-8 py-16 lg:p-24`}>
        <SectionTitle title={"NEWS"} />

        <div class={tw`shadow overflow-hidden sm:rounded-md mt-8 md:mt-12`}>
          <ul class={tw`divide-y divide-gray-300`}>
            <Item title={"Webサイト開設"} date={"2022.08"} />
            <Item
              title={"川井キャンプ場でバーベキュー親睦会を行いました。"}
              date={"2022.07"}
            />
          </ul>
        </div>
        <div class={tw`text-indigo-400 inline-block text-center w-full text-xl`}>
          <a href="news">more →</a>
        </div>
      </div>
    </section>
  );
};
