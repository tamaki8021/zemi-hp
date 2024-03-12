/** @jsx h */
import { h, FunctionComponent, JSX } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

const FormKeys = {
  formUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSednRymkF0XBi8nh1ZIma9uQq0y89nHZDkvlcCu3XleHmcVxw/viewform",
  name: "entry.1558690293",
  email: "entry.1914789524",
  content: "entry.948953426",
};

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleClick = async () => {
    await fetch(FormKeys.formUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Location: "/",
      },
      body: `${FormKeys.name}=${name}&${FormKeys.email}=${email}&${FormKeys.content}=${content}`,
    });
    // FEATURE: 成功時の確認アラートとかの出し方がわからなかったので、現時点は送信したら画面のレンダリングが行われる
  };

  return (
    <form class={tw`w-full max-w-xl mx-auto px-6`} onSubmit={handleClick}>
      <div>
        <div class={tw`grid max-w-xl grid-cols-2 gap-4 m-auto`}>
          <div class={tw`col-span-2 lg:col-span-1`}>
            <div class={tw`relative text-gray-200`}>
              <label for="name">お名前</label>
              <input
                value={name}
                type="text"
                onInput={(e) => setName(e.currentTarget.value)}
                id="name"
                name="name"
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
                name="email"
                onInput={(e) => setEmail(e.currentTarget.value)}
                class={tw`rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                placeholder="email"
              />
            </div>
          </div>
          <div class={tw`col-span-2`}>
            <label class={tw`text-gray-200`} for="content">
              お問合せ内容
            </label>
            <textarea
              class={tw`flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              id="content"
              placeholder="Enter your comment"
              name="content"
              rows={5}
              cols={40}
              onInput={(e) => setContent(e.currentTarget.value)}
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
}
