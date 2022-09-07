/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { TopSection } from "../common/index.ts";
import { ActiveCard } from "../Active/ActiveCard.tsx";
import type { Article } from "../../routes/active/index.tsx";
import { formatDate } from "../../utils/date.ts";

type Props = {
  articles: Article[] | undefined;
};

export const Actives: FunctionComponent<Props> = ({ articles }) => {
  return (
    <div class={tw`w-full mx-auto bg-black pt-10`}>
      <TopSection title={"Active"} subTitle={"活動実績"} />
      <div
        class={tw`w-full bg-black flex flex-col justify-center items-center bg-black relative`}
      >
        <div class={tw`pt-24 p-8 text-white min-h-screen h-full`}>
          {!articles ? (
            <p class={tw`text-4xl md:text-9xl font-extrabold`}>
              コンテンツがありません。
            </p>
          ) : (
            <div class="flex flex-wrap">
              {articles.map((article) => (
                <ActiveCard
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  createdAt={formatDate(article.createdAt)}
                  imageUrl={article.imageUrl}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
