import React from "react";
import GlobalAccordion from "./components/Accordion";

function CustomText() {
  return (
    <GlobalAccordion title={"Custom Text"}>
      <div className="p-4 mt-1 border border-grey rounded-md text-[#9195a4]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
    </GlobalAccordion>
  );
}

export default CustomText;
