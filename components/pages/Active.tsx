/** @jsx h */
/** @jsxFrag Fragment */
import { h, FunctionComponent, Fragment } from "preact";
import { tw } from "@twind";
import { Block } from "../Active/renderes/Block.tsx";
import { TopSection } from "../common/index.ts";
import { Props } from "../../routes/active/[id].tsx";
import { formatDate } from "../../utils/date.ts";

export const Active: FunctionComponent<Props> = ({ blocks, page }) => {
  // @ts-ignore: <>
  const title = page.properties.title.title[0].plain_text as string;
  // @ts-ignore: <>
  const createdAt = page.properties.createdAt.created_time as string;

  return (
    <div class={tw`w-full mx-auto bg-black pt-10`}>
      <TopSection title={title} subTitle={formatDate(createdAt)} />
      <div
        class={tw`w-full min-h-screen items-center mx-auto py-16 sm:py-12 px-8 lg:px-20 relative bg-black text-white`}
      >
        {blocks.map((block) => (
          <Fragment key={block.id}>{<Block block={block} />}</Fragment>
        ))}
      </div>
    </div>
  );
};
