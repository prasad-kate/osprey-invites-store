import React from "react";
import GlobalAccordion from "./components/Accordion";

function Personalization() {
  return (
    <GlobalAccordion title={"Personalisation at Rs 500"}>
      <div className="p-4 mt-1 border border-grey rounded-md text-[#9195a4]">
        Please enter text for personalisation, kindly leave blank (do not type)
        incase of non-personalised orders
      </div>
    </GlobalAccordion>
  );
}

export default Personalization;
