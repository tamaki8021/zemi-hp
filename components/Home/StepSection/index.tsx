/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { Item } from "./Item.tsx";
import { SectionTitle } from "../../common/index.ts";

export const StepSection: FunctionComponent = () => {
  return (
    <section class={tw`w-full mx-auto relative bg-black`}>
      <div class={tw`px-8 py-16 lg:p-24`}>
        <SectionTitle title={"ゼミ四半期の流れ"} />

        <div
          class={tw`grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3`}
        >
          <Item
            svgPath={
              "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            }
            title={"インプット"}
            contents={
              "「AI DRIVEN」や「マーケターのように生きろ」などの実務近いテキストを輪読し、議論をしながらインプットを行い思考のアップデートをします。"
            }
          />
          <Item
            svgPath={
              "M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            }
            title={"プレゼン"}
            contents={
              "インプットした内容をプレゼンしていき、それぞれの意見を踏まえながらもさらに深く学んでいきます。"
            }
          />
          <Item
            svgPath={
              "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            }
            title={"アウトプット"}
            contents={
              "秋季ではそれぞれでチームを組み、何をやるか企画から考え、実行して何かしらのアウトプットを出していただきます。"
            }
          />
        </div>
      </div>
    </section>
  );
};
