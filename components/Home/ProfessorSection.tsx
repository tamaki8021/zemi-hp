/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { SectionTitle } from "../SectionTitle.tsx";

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
                  src={"/no_image.jpg"}
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
            <div class={tw`inline-flex w-full sm:w-auto sm:mx-2 mt-3`}>
              <a
                href=""
                class={tw`inline-flex items-center justify-center px-5 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:ring focus:ring-blue-300 focus:ring-opacity-80 animate-pulse`}
              >
                more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
