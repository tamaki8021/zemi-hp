/** @jsx h */
import { h, FunctionComponent } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";

export const DefaultHead: FunctionComponent = () => {
  return (
    <div>
      <Head>
        <title>赤木ゼミナール</title>
      </Head>
    </div>
  );
};
