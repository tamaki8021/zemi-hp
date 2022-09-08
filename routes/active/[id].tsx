/** @jsx h */
import { h } from "preact";
import { Fotter } from "../../components/layout/Fotter.tsx";
import Header from "../../islands/Header.tsx";

import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { getPage, getBlocks } from "../../lib/notion.ts";
import { Active } from "../../components/pages/Active.tsx";
import type {
  BlockObjectResponse,
  GetPageResponse,
} from "notion_sdk/src/api-endpoints.ts";
import { DefaultHead } from "../../components/layout/DefaultHead.tsx";

export type Props = {
  page: GetPageResponse;
  blocks: Array<BlockObjectResponse>;
};

export const handler: Handlers<Props | undefined> = {
  async GET(_, ctx) {
    const id = ctx.params.id;
    const page = await getPage(id);
    const blocks = await getBlocks(id);
    // Retrieve block children for nested blocks (one level deep), for example toggle blocks
    // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
    const childBlocks = await Promise.all(
      blocks
        .filter((block) => block.has_children)
        .map(async (block) => {
          return {
            id: block.id,
            children: await getBlocks(block.id),
          };
        })
    );
    const blocksWithChildren = blocks.map((block) => {
      // Add child blocks if the block should contain children but none exists
      if (block.has_children && !block[block.type].children) {
        block[block.type]["children"] = childBlocks.find(
          (x) => x.id === block.id
        )?.children;
      }

      return block;
    });

    return ctx.render({
      page,
      blocks: blocksWithChildren,
    });
  },
};

export default function ActivePage({ data }: PageProps<Props>) {
  return (
    <html class="dark">
      <DefaultHead />
      <Header />
      <Active page={data.page} blocks={data.blocks} />
      <Fotter />
    </html>
  );
}
