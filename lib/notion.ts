import "dotenv/load.ts";
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
