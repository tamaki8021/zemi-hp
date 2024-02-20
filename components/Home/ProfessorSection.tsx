/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { SectionTitle } from "../common/index.ts";

export const ProfessorSection: FunctionComponent = () => {
  return (
    <section class={tw`w-full mx-auto relative bg-black`}>
      <div class={tw`px-8 py-16 lg:p-24`}>
        <SectionTitle title={"PROFESSOR"} />
        <div class={tw`items-center lg:flex mt-8 md:mt-12`}>
          <div class={tw`lg:w-1/2`}>
            <div class={tw`flex items-center justify-center md:justify-end`}>
              <div class={tw`max-w-xl`}>
                <img
                  class={tw`object-cover object-center w-full sm:h-72 max-h-72 rounded-md shadow`}
                  src={"/akagi.png"}
                  alt="professorの画像"
                />
              </div>
            </div>
          </div>
          <div class={tw`lg:w-1/2 mt-8 lg:mt-0 md:ml-16 items-center mx-auto`}>
            <div class={tw`items-center text-gray-500 flex`}>
              <h2
                class={tw`text-3xl font-extrabold text-gray-800 dark:text-gray-100`}
              >
                赤木 徳顕
              </h2>
              <p class={tw`ml-6`}>AKAGI Tokuaki</p>
            </div>
            <p class={tw`mt-4 text-gray-500 dark:text-gray-400 lg:max-w-xl`}>
              帝京大学 経済学部 経営学科
            </p>
            <div class={tw`text-white pt-6`}>
              <p class={tw`text-lg font-bold pb-2`}>- 専門分野 -</p>
              <p>マーケティング・データサイエンス</p>
            </div>
            <a
              href="https://www3.med.teikyo-u.ac.jp/profile/ja.36dd73d65bb6827a.html"
              type="button"
              target="_blank"
              rel="noopener noreferrer"
              class={tw`md:w-1/2 mt-6 py-2 px-4 flex justify-center items-center  bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full animate-pulse`}
            >
              more
              <svg
                class={tw`w-6 h-6 ml-2`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
