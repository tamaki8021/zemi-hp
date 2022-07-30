/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import {
  TopSection,
  ConceptSection,
  ProfessorSection,
  StepSection,
  NewsSection,
} from "../Home/index.ts";

export const Home: FunctionComponent = () => {
  return (
    <div class={tw`w-full dark:bg-black`}>
      <div class={tw`p-1 mx-auto max-w-screen-lg`}>
        <TopSection />
        <ConceptSection />
        <ProfessorSection />
        <StepSection />
        <NewsSection />
      </div>
    </div>
  );
};
