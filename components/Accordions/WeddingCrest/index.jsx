"use client";

import { useSelector } from "react-redux";
import GlobalAccordion from "../components/Accordion";
import CrestCard from "./components/CrestCard";

function WeddingCrest() {
  const { noOfWeddingCrests } = useSelector((state) => state.product);

  return (
    <GlobalAccordion title={"Wedding crest"}>
      <div className="grid grid-cols-4 gap-2 py-2">
        {[200, 230, 210, 220, 250, 260]?.map((item, index) => {
          return (
            <CrestCard
              key={item}
              activeCard={noOfWeddingCrests}
              index={index + 1}
              img={"/wedding-crest.png"}
              variant={"wedding-crest"}
              price={item}
            />
          );
        })}
      </div>
      <div className="px-4 py-3 border border-[#e6e6e6] rounded-sm text-[#9195a4]">
        Please enter your initials here
      </div>
    </GlobalAccordion>
  );
}

export default WeddingCrest;
