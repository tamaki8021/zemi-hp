/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { SectionTitle } from "../common/index.ts";

export const MessageSection: FunctionComponent = () => {
  return (
    <section class={tw`w-full mx-auto relative bg-black`}>
      <div class={tw`px-8 py-16 lg:p-24`}>
        <SectionTitle title={"Message"} />

        <p
          class={tw`w-full text-white md:w-3/4 m-auto text-center md:text-xl mt-8 md:mt-12`}
        >
          帝京大学の環境の中で、何か「未来」見えずにモヤモヤしている学生は来てください。
          <br />
          「変態」を目指してみること。どうやったらステキな「変態」になれるかを議論していきます。
        </p>
      </div>
    </section>
  );
};
