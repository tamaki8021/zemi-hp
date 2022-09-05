import "dotenv/load.ts";
import { BlockObjectResponse } from "notion_sdk/src/api-endpoints.ts";
import { Client, APIErrorCode } from "notion_sdk/src/mod.ts";

interface PostBlock {
  id: string;
  type:
    | "heading_2"
    | "paragraph"
    | "heading_1"
    | "heading_3"
    | "bulleted_list_item"
    | "numbered_list_item"
    | "to_do"
    | "toggle"
    | "child_page"
    | "unsupported";
  text: string | null;
}

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
    console.log(res);

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

export const getPageContent = async (pageId: string) => {
  console.log(pageId);

  const res = await notion.blocks.children.list({ block_id: pageId });

  const postBlocks = res.results.map((b): PostBlock => {
    const block = b as BlockObjectResponse;
    console.log(block);

    switch (block.type) {
      case "heading_2":
        return {
          id: block.id,
          type: block.type,
          text: block.heading_2.rich_text[0]?.plain_text || null,
        };
      case "paragraph":
        return {
          id: block.id,
          type: block.type,
          text: block.paragraph.rich_text[0]?.plain_text || null,
        };
      case "bulleted_list_item":
        return {
          id: block.id,
          type: block.type,
          text: block.bulleted_list_item.rich_text[0]?.plain_text || null,
        };
      default:
        return {
          id: block.id,
          type: "unsupported",
          text: "",
        };
    }
  });

  console.log(postBlocks);
};

export const getPageProperty = () => {};
