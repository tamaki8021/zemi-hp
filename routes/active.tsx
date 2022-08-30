/** @jsx h */
import { h } from "preact";
import { Fotter } from "../components/layout/Fotter.tsx";
import { Active } from "../components/pages/Active.tsx";
import Header from "../islands/Header.tsx";

import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { getDatabase } from "../lib/notion.ts";

export const handler: Handlers<any | null> = {
  async GET(_, ctx) {
    const data = await getDatabase();
    console.log(data?.results.map((d) => d.properties));
    console.log(data?.results.map((d) => d.url));
    return ctx.render(data);
  },
};

export default function ActivePage({ data }: PageProps<any | null>) {
  if (!data) {
    return <h1>{data}</h1>;
  }

  return (
    <html class="dark">
      <Header />
      <Active />
      <Fotter />
    </html>
  );
}
