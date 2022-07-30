/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";

export const NewsSection: FunctionComponent = () => {
  return (
    <section class="px-4 py-5 border-b rounded-t sm:px-6">
      <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
        <ul class="divide-y divide-gray-200">
          <li>
            <a class="block hover:bg-gray-50 dark:hover:bg-gray-900">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <p class="text-md text-gray-700 dark:text-white md:truncate">
                    Increase sales by 10% year over year
                  </p>
                  <div class="ml-2 flex-shrink-0 flex">
                    <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      On-Track
                    </p>
                  </div>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <p class="flex items-center text-md font-light text-gray-500 dark:text-gray-300">
                      January 7, 2020
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a class="block hover:bg-gray-50 dark:hover:bg-gray-900">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <p class="text-md text-gray-700 dark:text-white md:truncate">
                    Increase newsletter subscribers by 500
                  </p>
                  <div class="ml-2 flex-shrink-0 flex">
                    <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      To do
                    </p>
                  </div>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <p class="flex items-center text-md font-light text-gray-500 dark:text-gray-300">
                      Jun 14, 2020
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a class="block hover:bg-gray-50 dark:hover:bg-gray-900">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <p class="text-md text-gray-700 dark:text-white md:truncate">
                    Increase customer satisfaction rating by 10 points
                  </p>
                  <div class="ml-2 flex-shrink-0 flex">
                    <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Backlog
                    </p>
                  </div>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <p class="flex items-center text-md font-light text-gray-500 dark:text-gray-300">
                      December 10, 2020
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
