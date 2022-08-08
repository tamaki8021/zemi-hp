/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { TopSection } from "../common/index.ts";
import Form from "../../islands/Form.tsx";

export const Contact: FunctionComponent = () => {
  return (
    <div class={tw`w-full h-screen mx-auto bg-black pt-10`}>
      <TopSection title={"Contact"} subTitle={"お問合わせ"} />
      <div
        class={tw`w-full flex flex-col justify-center items-center bg-black relative py-20`}
      >
        <Form />
      </div>
    </div>
  );
};
