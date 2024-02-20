/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { NewsItem } from "../News/index.ts";
import { TopSection } from "../common/index.ts";

export const News: FunctionComponent = () => {
  return (
    <div class={tw`w-full mx-auto bg-black pt-10`}>
      <TopSection title={"News"} subTitle={"お知らせ"} />
      <div
        class={tw`px-6 lg:px-12 py-16 shadow overflow-hidden sm:rounded-md relative bg-black h-screen`}
      >
        <ul>
          <NewsItem title={"赤木教授は4月より開志専門職大学で教鞭を取られます"} date={"2024.02"} />
          <NewsItem title={"戦略コンサルティング4大学交流会に参加しました"} date={"2023.09"} />
          <NewsItem title={"赤木教授が日本ソーシャルデータサイエンス学会で研究発表を行いました"} date={"2023.01"} />
          <NewsItem title={"戦略コンサルティング4大学交流会に参加しました"} date={"2022.09"} />
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
