/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { TopSection } from "../common/index.ts";
import { MessageSection } from "../About/MessageSection.tsx";

export const About: FunctionComponent = () => {
  return (
    <div class={tw`w-full h-full mx-auto bg-black pt-10`}>
      <TopSection title={"About"} subTitle={"ゼミについて"} />
      <div
        class={tw`w-full h-full bg-black flex flex-col justify-center items-center bg-black relative`}
      >
        <div class={tw`pt-24 p-8 h-full`}>
          <MessageSection />

          <embed
            width="100%"
            height="680vh"
            src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://tamaki8021.github.io/pdf-hosting/akagi211004.pdf"
          />
        </div>
      </div>
    </div>
  );
};
