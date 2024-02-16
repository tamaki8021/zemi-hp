/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { css, keyframes, animation } from "twind/css";

const typeAnimation = animation("3s ease-out .10s infinite alternate both", {
  "0%": { transform: "translateX(0ch)" },
  "5%, 10%": { transform: "translateX(1ch)" },
  "15%, 20%": { transform: "translateX(3ch)" },
  "25%, 30%": { transform: "translateX(5ch)" },
  "35%, 40%": { transform: "translateX(8ch)" },
  "45%, 50%": { transform: "translateX(12ch)" },
  "55%, 60%": { transform: "translateX(18ch)" },
  "65%, 70%": { transform: "translateX(24ch)" },
  "75%, 80%": { transform: "translateX(28ch)" },
  "85%, 90%": { transform: "translateX(32ch)" },
  "95%, 100%": { transform: "translateX(36ch)" },
});

const cursorKeyframes = keyframes({
  "0%,40%": { opacity: 1 },
  "60%,100% ": { opacity: 0 },
});

const afterStyles = css({
  "&::after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "4px",
    height: "100%",
    willChange: "transform",
    backgroundColor: "#fff",
    animation: "cursor .6s linear infinite alternate",
    animationName: cursorKeyframes,
  },
});

export const TypingAnimation: FunctionComponent = () => {
  return (
    <h1 class={tw`my-16 sm:my-20 text-xl text-gray-100`}>
      帝京大学でモヤモヤしている人へ
      <br class={tw`block md:hidden`} />
      <span class={tw`relative`}>
        <span
          class={tw`h-20 pt-2 overflow-x-hidden whitespace-nowrap animate-pulse`}
        >
          ステキな「<span class={tw`font-bold text-red-400`}>変態</span>
          」=「<span class={tw`font-bold text-red-400`}>NERD</span>
          」を目指しませんか？
        </span>
        <span
          class={tw`absolute -bottom-0 left-0 -top-1 inline-block bg-black w-full ${typeAnimation} ${afterStyles}`}
        ></span>
      </span>
    </h1>
  );
};
