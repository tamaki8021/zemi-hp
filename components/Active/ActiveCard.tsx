/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";

type Props = {
  title: string;
  createdAt: string;
  imageUrl: string | undefined;
};

export const ActiveCard: FunctionComponent<Props> = ({ title, createdAt, imageUrl }) => {
  return (
    <div class={tw`p-4 md:w-1/3`}>
      <div
        class={tw`h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden`}
      >
        <img
          class={tw`lg:h-48 md:h-36 w-full object-cover object-center`}
          src={imageUrl ? imageUrl : "https://dummyimage.com/720x400"}
          alt="blog"
        />
        <div class={tw`p-6`}>
          <h1 class={tw`text-lg font-medium mb-3`}>{title}</h1>
          <p class={tw`tracking-widest text-xs font-medium text-gray-400 mb-1`}>
            {createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};
