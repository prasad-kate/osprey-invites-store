import React from "react";
import GlobalAccordion from "./components/Accordion";

function OrderDetails() {
  return (
    <GlobalAccordion title={"Order Details"} variant={"simple"}>
      <div className="px-3 mt-1 text-[#9195a4]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
    </GlobalAccordion>
  );
}

export default OrderDetails;
