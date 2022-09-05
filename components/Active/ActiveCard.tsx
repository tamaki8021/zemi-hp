/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";

type Props = {
  id: string;
  title: string;
  createdAt: string;
  imageUrl: string | undefined;
};

export const ActiveCard: FunctionComponent<Props> = ({
  id,
  title,
  createdAt,
  imageUrl,
}) => {
  return (
    <div class={tw`sm:p-4 px-0 py-4`}>
      <div
        class={tw`h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden`}
      >
        <img
          class={tw`lg:h-48 md:h-36 w-full object-cover object-center`}
          src={imageUrl ? imageUrl : "https://dummyimage.com/720x400"}
          alt="blog"
        />
        <div class={tw`p-6`}>
          <h1 class={tw`text-lg font-medium mb-3`}><a href={`active/${id}`}>{title}</a></h1>
          <p class={tw`tracking-widest text-xs font-medium text-gray-400 mb-1`}>
            {createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};
