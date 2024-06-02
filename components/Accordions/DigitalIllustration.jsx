"use client";

import { Upload } from "lucide-react";
import { useSelector } from "react-redux";
import CrestCard from "./WeddingCrest/components/CrestCard";
import GlobalAccordion from "./components/Accordion";
import { formatToIndianCurrency } from "@/lib/utils";

function DigitalIllustration() {
  const { noOfIllustrations } = useSelector((state) => state.product);

  return (
    <GlobalAccordion title={"Digital Illustration"}>
      <div className="grid grid-cols-4 gap-2 py-2">
        {[200, 250, 230, 220, 260, 270]?.map((item, index) => {
          return (
            <CrestCard
              key={item}
              activeCard={noOfIllustrations}
              index={index + 1}
              img={"/digital-illustration.png"}
              variant={"illustrations"}
              price={item}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-between border border-[#e6e6e6] rounded-sm text-[#9195a4] overflow-hidden">
        <div className="p-3">
          <div className="text-[#92711b] text-lg text-nowrap">
            Personalise illustrations
          </div>
          <div className="text-[#92711b] font-bold text-xl">
            {formatToIndianCurrency(3000)}/-{" "}
            <span className="text-[#9195a4] font-normal text-sm">
              (add your own face)
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 bg-[#e2e2e2] text-[#9195a4] p-4 h-full">
          <Upload />
          <div className="text-nowrap">upload your face</div>
        </div>
      </div>
    </GlobalAccordion>
  );
}

export default DigitalIllustration;
