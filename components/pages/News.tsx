/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { NewsItem } from "../News/index.ts";
import { TopSection } from "../common/index.ts";

type Props = {
  data: NewsContent[] | undefined;
};

export const News: FunctionComponent = ({ data }: Props) => {
  const newsContents = [
    {
      title: "赤木教授は4月より開志専門職大学で教鞭を取られます",
      date: "2024.02",
    },
    { title: "戦略コンサルティング4大学交流会に参加しました", date: "2023.09" },
  ];

  function getContentId(data, title) {
    if (!data) {
      return undefined;
    }
  
    const matchingItems = data.filter(item => item.title === title);
  
    // ここでは最初のマッチングアイテムのIDを返していますが、必要に応じて適切な値を返すように調整してください
    return matchingItems.length > 0 ? matchingItems[0].id : undefined;
  }

  return (
    <div class={tw`w-full mx-auto bg-black pt-10`}>
      <TopSection title={"News"} subTitle={"お知らせ"} />
      <div
        class={tw`px-6 lg:px-12 py-16 shadow overflow-hidden sm:rounded-md relative bg-black h-screen`}
      >
        <ul>
          {newsContents.map((content) => (
            <NewsItem
              title={content.title}
              date={content.date}
              contentId={getContentId(data, content.title)}
            />
          ))}
          {/* 最新の2つだけを表示するためにコメントアウト
          <NewsItem title={"赤木教授が日本ソーシャルデータサイエンス学会で研究発表を行いました"} date={"2023.01"} />
          <NewsItem title={"戦略コンサルティング4大学交流会に参加しました"} date={"2022.09"} />
          <NewsItem title={"Webサイト開設"} date={"2022.08"} />
          <NewsItem
            title={"川井キャンプ場で親睦バーベキュー会を行いました。"}
            date={"2022.07"}
          /> 
          */}
        </ul>
      </div>
    </div>
  );
};
