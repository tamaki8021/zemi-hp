/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { TopSection } from "../TopSection.tsx";
import { NewsItem } from "../News/index.ts";

export const News: FunctionComponent = () => {
  return (
    <div class={tw`w-full mx-auto bg-black pt-10`}>
      <TopSection title={"News"} subTitle={"お知らせ"} />
      <div
        class={tw`px-6 lg:px-12 py-16 shadow overflow-hidden sm:rounded-md relative bg-black h-screen`}
      >
        <ul>
          <NewsItem title={"Webサイト開設"} date={"2022.08"} />
          <NewsItem
            title={"川井キャンプ場で親睦バーベキュー会を行いました。"}
            date={"2022.07"}
          />
        </ul>
      </div>
    </div>
  );
};
