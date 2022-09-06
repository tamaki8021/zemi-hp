/** @jsx h */
/** @jsxFrag Fragment */
import { h, FunctionComponent, Fragment } from "preact";
import type { BlockObjectResponse } from "notion_sdk/src/api-endpoints.ts";
import { Block } from "./Block.tsx";

type Props = {
  block: BlockObjectResponse;
};

export const List: FunctionComponent<Props> = ({ block }) => {
  const { type } = block;
  const value = block[type];
  console.log(value);

  if (!value) return <Fragment></Fragment>;

  const isNumberedList = value.children[0].type === "numbered_list_item";

  return (
    <>
      {isNumberedList ? (
        <ol>
          {value.children.map((block: BlockObjectResponse) => (
            <Block block={block} />
          ))}
        </ol>
      ) : (
        <ul>
          {value.children.map((block: BlockObjectResponse) => (
            <Block block={block} />
          ))}
        </ul>
      )}
    </>
  );
};
