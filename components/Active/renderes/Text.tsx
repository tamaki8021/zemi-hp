/** @jsx h */
/** @jsxFrag Fragment */
import { h, FunctionComponent, Fragment } from "preact";
import { tw } from "@twind";
import type { RichTextItemResponse } from "notion_sdk/src/api-endpoints.ts";

type Props = {
  text: Array<RichTextItemResponse>;
};

export const Text: FunctionComponent<Props> = ({ text }) => {
  if (!text) {
    return <Fragment></Fragment>;
  }

  return (
    <>
      {text.map((value) => {
        if (value.type !== "text") {
          return <Fragment></Fragment>;
        }

        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = value;

        return (
          <span
            class={tw`${[
              bold ? "font-bold" : "",
              code ? "font-mono bg-white p-1 rounded-sm" : "",
              italic ? "font-italic" : "",
              strikethrough ? "line-through" : "",
              underline ? "underline" : "",
            ].join(" ")}`}
            style={color !== "default" ? { color } : {}}
          >
            {text.link ? (
              <a href={text.link.url}>{text.content}</a>
            ) : (
              text.content
            )}
          </span>
        );
      })}
    </>
  );
};
