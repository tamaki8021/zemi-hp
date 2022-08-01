/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import { SectionTitle } from "../SectionTitle.tsx";

export const ProfessorSection: FunctionComponent = () => {
  return (
    <section class={tw`w-full mx-auto relative bg-black`}>
      <div class={tw`px-8 py-16 lg:p-24`}>
        <SectionTitle title={"PROFESSOR"} />
        <div class={tw`items-center lg:flex`}>
          <div class={tw`mt-8 xl:mt-12 lg:w-1/2`}>
            <div class={tw`flex items-center justify-center`}>
              <div class="max-w-xl">
                <img
                  class={tw`object-cover object-center w-full h-64 rounded-md shadow`}
                  src={
                    "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class={tw`lg:w-1/2`}>
            <h2 class={tw`text-3xl font-bold text-gray-800 dark:text-gray-100`}>
              Who I am
            </h2>

            <p class={tw`mt-4 text-gray-500 dark:text-gray-400 lg:max-w-xl`}>
              Hi I am jane , software engineer
              <a
                class={tw`font-bold text-blue-600 dark:text-blue-400`}
                href="#"
              >
                @BakaTeam
              </a>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in
              sed non alias, fugiat, commodi nemo ut fugit corrupti dolorem
              sequi ex veniam consequuntur id, maiores beatae ipsa omnis
              aliquam?
            </p>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};
