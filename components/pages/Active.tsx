/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { TopSection } from "../common/index.ts";
import type { Article } from "../../routes/active.tsx";

type Props = {
  article: Article[] | undefined;
};

export const Active: FunctionComponent<Props> = ({ article }) => {
  console.log(article);

  return (
    <div class={tw`w-full mx-auto bg-black pt-10`}>
      <TopSection title={"Active"} subTitle={"活動実績"} />
      <div
        class={tw`w-full h-screen bg-black flex flex-col justify-center items-center bg-black relative`}
      >
        <div class={tw`pt-24 p-8`}>
          <section class={tw`max-w-3xl text-white `}>
            {!article ? (
              <p class={tw`text-4xl md:text-9xl font-extrabold`}>コンテンツがありません。</p>
            ) : (
              <p class={tw`text-4xl md:text-9xl font-extrabold`}>コンテンツがあります。</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
