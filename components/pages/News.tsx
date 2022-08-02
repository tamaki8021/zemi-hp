/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { TopSection } from "../TopSection.tsx";
import { NewsItem } from "../News/index.ts";

export const News: FunctionComponent = () => {
  return (
    <div class={tw`w-full bg-black h-screen mx-auto`}>
      <div class={tw`px-8 py-16 lg:p-14`}>
        <TopSection title={"News"} subTitle={"お知らせ"} />
        <div class={tw`shadow overflow-hidden sm:rounded-md mt-8 md:mt-12`}>
          <ul>
            <NewsItem title={"Webサイト開設"} date={"2022.08"} />
            <NewsItem
              title={"川井キャンプ場で親睦バーベキュー会を行いました。"}
              date={"2022.07"}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
