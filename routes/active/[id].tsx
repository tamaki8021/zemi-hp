/** @jsx h */
import { h } from "preact";
import { Fotter } from "../../components/layout/Fotter.tsx";
import Header from "../../islands/Header.tsx";

import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { queryDatabase, getPageContent } from "../../lib/notion.ts";

export type Article = {
  id: string;
  title: string;
  imageUrl: string | undefined;
  createdAt: string;
};

export const handler: Handlers<any | undefined> = {
  async GET(_, ctx) {
    const name = ctx.params.id;
    const res = await getPageContent(name);
    // const data = res?.results.map((d) => {
    //   // @ts-ignore: <QueryDatabaseResponseに合わせることができなかったので自作>
    //   const properties = d.properties;

    //   const id = d.id;
    //   const title = properties.title.title[0].plain_text as string;
    //   const createdAt = properties.createdAt.created_time as string;
    //   const imageUrl = properties.image.files[0]
    //     ? properties.image.files[0].file.url as string
    //     : undefined;

    //   return {
    //     id,
    //     title,
    //     imageUrl,
    //     createdAt,
    //   };
    // });
    return ctx.render(res);
  },
};

export default function ActivePage({ data }: PageProps<any | undefined>) {

  return (
    <html class="dark">
      <Header />
      {/* <Active articles={data} /> */}
      <Fotter />
    </html>
  );
}
