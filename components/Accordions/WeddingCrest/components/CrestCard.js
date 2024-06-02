"use client";
import { formatToIndianCurrency } from "@/lib/utils";
import {
  setNoOfIllustrations,
  setNoOfWeddingCrests,
} from "@/store/slices/productSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

function CrestCard({ activeCard, img, variant, price }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-col justify-center items-center border cursor-pointer rounded-md overflow-hidden transition-all duration-150 ease-in 
      ${
        activeCard === price
          ? "border-[#92711b] border-2"
          : "border-[#e6e6e6] border-2"
      }`}
      onClick={() => {
        if (activeCard === price) {
          if (variant === "illustrations") {
            dispatch(setNoOfIllustrations(0));
          }
          if (variant === "wedding-crest") {
            dispatch(setNoOfWeddingCrests(0));
          }
        } else {
          if (variant === "illustrations") {
            dispatch(setNoOfIllustrations(price));
          }
          if (variant === "wedding-crest") {
            dispatch(setNoOfWeddingCrests(price));
          }
        }
      }}
    >
      <div className="flex items-center justify-center min-h-[100px]">
        <Image src={img} alt="crest" width={90} height={90} />
      </div>
      <div className="bg-[#efe4c6] text-[#92711b] text-sm w-full text-center py-1">
        {formatToIndianCurrency(+price, true)}
      </div>
    </div>
  );
}

export default CrestCard;