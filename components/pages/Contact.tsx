/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { TopSection } from "../TopSection.tsx";
import { Form } from "../Contact/index.ts";

export const Contact: FunctionComponent = () => {
  return (
    <div class={tw`w-full mx-auto bg-black pt-10`}>
      <TopSection title={"Contact"} subTitle={"お問合わせ"} />
      <div
        class={tw`w-full h-screen bg-black flex flex-col justify-center items-center bg-black relative`}
      >
        <Form />
      </div>
    </div>
  );
};
