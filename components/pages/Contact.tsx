/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";

export const Contact: FunctionComponent = () => {
  return (
    <div class={tw`w-full bg-black h-screen`}>
      <div class={tw`pt-24 p-8`}>
        <section>
          <form
            class={tw`flex w-full max-w-3xl space-x-6 justify-center mx-auto`}
          >
            <div>
              <div
                class={tw`mb-6 text-3xl font-light text-center text-gray-800 dark:text-white`}
              >
                Contact us !
              </div>
              <div class={tw`grid max-w-xl grid-cols-2 gap-4 m-auto`}>
                <div class={tw`col-span-2 lg:col-span-1`}>
                  <div class={tw` relative `}>
                    <input
                      type="text"
                      id="contact-form-name"
                      class={tw` rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class={tw`col-span-2 lg:col-span-1`}>
                  <div class={tw` relative `}>
                    <input
                      type="text"
                      id="contact-form-email"
                      class={tw` rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                      placeholder="email"
                    />
                  </div>
                </div>
                <div class={tw`col-span-2`}>
                  <label class={tw`text-gray-700`} for="name">
                    <textarea
                      class={tw`flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                      id="comment"
                      placeholder="Enter your comment"
                      name="comment"
                      rows={5}
                      cols={40}
                    ></textarea>
                  </label>
                </div>
                <div class={tw`col-span-2 text-right`}>
                  <button
                    type="submit"
                    class={tw`py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg`}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
