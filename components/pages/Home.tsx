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
    <div class={tw`w-full bg-black`}>
      <div class={tw`pt-24 `}>
        <TopSection />
        <ConceptSection />
        <ProfessorSection />
        <StepSection />
        <NewsSection />
      </div>
    </div>
  );
};
