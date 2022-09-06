import "dotenv/load.ts";
import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "notion_sdk/src/api-endpoints.ts";
import { Client, APIErrorCode } from "notion_sdk/src/mod.ts";

export const notion = new Client({ auth: Deno.env.get("NOTION_KEY") });

const databaseId = Deno.env.get("NOTION_DATABASE_ID");

export const queryDatabase = async () => {
  try {
    const res = await notion.databases.query({
      database_id: databaseId!,
      filter: {
        or: [
          {
            property: "published",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
      sorts: [
        {
          property: "createdAt",
          direction: "ascending",
        },
      ],
    });

    return res;
  } catch (error) {
    if (error.code === APIErrorCode.ObjectNotFound) {
      //
      // For example: handle by asking the user to select a different database
      //
      console.log(error);
    } else {
      // Other error handling code
      console.error(error);
    }
  }
};

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId: string) => {
  const blocks = [] as Array<BlockObjectResponse>;
  let cursor;
  while (true) {
    const {
      results,
      next_cursor,
    }: {
      results: Array<PartialBlockObjectResponse | BlockObjectResponse>;
      next_cursor: string | null;
    } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });

    blocks.push(...(results as Array<BlockObjectResponse>));
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }

  return blocks;
};
