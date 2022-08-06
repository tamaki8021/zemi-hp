/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";

export const Form: FunctionComponent = () => {
  return (
    <form
      class={tw`w-full max-w-xl mx-auto px-6`}
      action="https://docs.google.com/forms/u/3/d/e/1FAIpQLSfOMUu6n3hnfs5xcKM4_rx-TlzxMjrib5rExPYCEkYk7ECwgg/formResponse"
    >
      <div>
        <div class={tw`grid max-w-xl grid-cols-2 gap-4 m-auto`}>
          <div class={tw`col-span-2 lg:col-span-1`}>
            <div class={tw`relative text-gray-200`}>
              <label for="name">お名前</label>
              <input
                type="text"
                id="name"
                name="entry.527181026"
                class={tw`rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                placeholder="Name"
              />
            </div>
          </div>
          <div class={tw`col-span-2 lg:col-span-1`}>
            <div class={tw`relative text-gray-200`}>
              <label for="email">メールアドレス</label>
              <input
                type="email"
                id="email"
                name="entry.1133397221"
                class={tw`rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                placeholder="email"
              />
            </div>
          </div>
          <div class={tw`col-span-2`}>
            <label class={tw`text-gray-200`} for="comment">
              お問合せ内容
            </label>
            <textarea
              class={tw`flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              id="comment"
              placeholder="Enter your comment"
              name="entry.466288851"
              rows={5}
              cols={40}
            ></textarea>
          </div>
          <div class={tw`col-span-2 text-right mt-4`}>
            <button
              type="submit"
              class={tw`py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full`}
            >
              送信
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
