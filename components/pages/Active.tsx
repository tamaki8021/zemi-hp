/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { TopSection } from "../common/index.ts";
import type { Article } from "../../routes/active.tsx";
import { ActiveCard } from "../Active/ActiveCard.tsx";

type Props = {
  articles: Article[] | undefined;
};

export const Active: FunctionComponent<Props> = ({ articles }) => {
  const formatDate = (createdAt: string) => {
    const d = new Date(createdAt);
    const year = d.getFullYear().toString();
    const month = d.getMonth().toString();
    const date = d.getDate().toString();

    return `${year}-${month}-${date}`;
  };

  return (
    <div class={tw`w-full mx-auto bg-black pt-10`}>
      <TopSection title={"Active"} subTitle={"活動実績"} />
      <div
        class={tw`w-full h-screen bg-black flex flex-col justify-center items-center bg-black relative`}
      >
        <div class={tw`pt-24 p-8`}>
          <section class={tw`text-white `}>
            {!articles ? (
              <p class={tw`text-4xl md:text-9xl font-extrabold`}>
                コンテンツがありません。
              </p>
            ) : (
              <div class="flex flex-wrap -m-4">
                {articles.map((article) => (
                  <ActiveCard
                    key={article.id}
                    title={article.title}
                    createdAt={formatDate(article.createdAt)}
                    imageUrl={article.imageUrl}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
