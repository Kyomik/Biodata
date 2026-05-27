"use client";

import Section from "../ui/Section";
import { CreatedInfo } from "./additional/CreatedInfo";
import { AuthorName } from "./additional/AuthorName";
import { AuthorDescription } from "./additional/AuthorDescription";

export default function SectionAdditional() {
  return (
    <Section id="additional" full className="
      flex flex-row px-10 pb-8 pt-10 uppercase mt-5 overflow-hidden
      max-sm:mt-0 max-sm:flex-col max-sm:gap-10 max-sm:px-7
    ">
      <CreatedInfo />

      <div className="flex flex-col justify-center flex-1 -ml-7 max-sm:ml-0 max-sm:gap-5">
        
        {/* Row container for BY label and elements */}
        <div className="flex flex-row max-sm:flex-col max-sm:order-1 max-sm:gap-4">
          <h2 className="
            text-4xl font-dm-sans text-white/95 tracking-widest font-bold scale-y-150 flex flex-col items-start justify-end flex-1 mr-9
            max-sm:text-sm max-sm:mr-0 max-sm:justify-center max-sm:items-center
          ">
            BY
          </h2>

          <AuthorDescription className="flex-2 max-sm:hidden" />
          <AuthorName className="hidden max-sm:block mt-2" />
        </div>

        <AuthorName className="mt-8 max-sm:hidden" />
        <AuthorDescription className="hidden max-sm:block max-sm:order-2 max-sm:mt-4" />

      </div>
    </Section>
  );
}
