/** @jsx h */
import { h } from "preact";
import { DefaultHead } from "../components/layout/DefaultHead.tsx";
import { Fotter } from "../components/layout/Fotter.tsx";
import { News } from "../components/pages/News.tsx";
import Header from "../islands/Header.tsx";

import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { queryDatabase } from "../lib/notion.ts";


export type NewsContent = {
  id: string;
  title: string;
};

export const handler: Handlers<NewsContent[] | undefined> = {
  async GET(_, ctx) {
    const res = await queryDatabase();
    const data = res?.results.map((d) => {
      // @ts-ignore: <QueryDatabaseResponseに合わせることができなかったので自作>
      const properties = d.properties;

      const id = d.id;
      const title = properties.title.title[0].plain_text as string;

      return {
        id,
        title,
      };
    });
    return ctx.render(data);
  },
};

export default function NewsPage({data}: PageProps<NewsContent[] | undefined>) {
  return (
    <html class="dark">
      <DefaultHead />
      <Header />
      <News data={data} />
      <Fotter />
    </html>
  );
}
