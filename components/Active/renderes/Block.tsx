/** @jsx h */
/** @jsxFrag Fragment */

import { h, Fragment, FunctionComponent } from "preact";
import { tw } from "@twind";
import type { BlockObjectResponse } from "notion_sdk/src/api-endpoints.ts";
import { List } from "./List.tsx";
import { Text } from "./Text.tsx";

type Props = {
  block: BlockObjectResponse;
};

export const Block: FunctionComponent<Props> = ({ block }) => {
  const { type, id } = block;
  const value = block[type];

  const renderItem = () => {
    switch (type) {
      case "paragraph":
        return (
          <p>
            <Text text={value.rich_text} />
          </p>
        );
      case "heading_1":
        return (
          <h1 class={tw`text-2xl`}>
            <Text text={value.rich_text} />
          </h1>
        );
      case "heading_2":
        return (
          <h2 class={tw`text-xl`}>
            <Text text={value.rich_text} />
          </h2>
        );
      case "heading_3":
        return (
          <h3 class={tw`text-lg`}>
            <Text text={value.rich_text} />
          </h3>
        );
      case "bulleted_list_item":
      case "numbered_list_item":
        return (
          <li>
            <Text text={value.rich_text} />
            {!!value.children && <List block={block} />}
          </li>
        );
      case "to_do":
        return (
          <div>
            <label htmlFor={id}>
              <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
              <Text text={value.rich_text} />
            </label>
          </div>
        );
      case "toggle":
        return (
          <details>
            <summary>
              <Text text={value.rich_text} />
            </summary>
            {value.children?.map((block: BlockObjectResponse) => (
              <Fragment key={block.id}>{<Block block={block} />}</Fragment>
            ))}
          </details>
        );
      case "child_page":
        return <p>{value.title}</p>;
      case "image": {
        const src =
          value.type === "external" ? value.external.url : value.file.url;
        const caption = value.caption ? value.caption[0]?.plain_text : "";
        return (
          <figure>
            <img src={src} alt={caption} />
            {caption && <figcaption>{caption}</figcaption>}
          </figure>
        );
      }
      case "divider":
        return <hr key={id} />;
      case "quote":
        return (
          <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>
        );
      case "code":
        return (
          <pre
            class={tw`bg-white p-1 my-5 leading-loose rounded-xl overflow-auto`}
          >
            <code class={tw`p-5 font-mono flex flex-wrap`} key={id}>
              {value.rich_text[0].plain_text}
            </code>
          </pre>
        );
      case "file": {
        const src_file =
          value.type === "external" ? value.external.url : value.file.url;
        const splitSourceArray = src_file.split("/");
        const lastElementInArray =
          splitSourceArray[splitSourceArray.length - 1];
        const caption_file = value.caption ? value.caption[0]?.plain_text : "";
        return (
          <figure>
            <div class={tw`p-1 no-underline`}>
              📎 <a href={src_file}>{lastElementInArray.split("?")[0]}</a>
            </div>
            {caption_file && <figcaption>{caption_file}</figcaption>}
          </figure>
        );
      }
      case "bookmark": {
        const href = value.url;
        return (
          <a href={href} target="_brank" class={tw`block mb-2`}>
            {href}
          </a>
        );
      }
      default:
        return `❌ Unsupported block (${
          type === "unsupported" ? "unsupported by Notion API" : type
        })`;
    }
  };

  return <div class={tw`p-1`}>{renderItem()}</div>;
};
