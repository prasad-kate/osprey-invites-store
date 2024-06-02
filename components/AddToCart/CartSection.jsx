import { useGetTotal } from "@/lib/utils";
import React from "react";

function CartSection() {
  const { total, noOfWeddingCrests, noOfIllustrations } = useGetTotal();

  const isAnyProductSelected = noOfWeddingCrests || noOfIllustrations;

  return (
    <div className="bg-[#b79234] fixed bottom-0 w-full rounded-t-xl text-center text-white sm:hidden md:hidden">
      <div className="my-1 text-sm">Save 50% on order for your spouse</div>
      <div className="bg-white rounded-t-xl border border-[#b79234]-50 flex items-center justify-between text-black gap-2 p-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="text-[#92711b] font-bold text-xl">{total}/-</div>
            <div className="text-[#9195a4] text-sm">Intro + page in cart</div>
          </div>
          {!!isAnyProductSelected && (
            <div className="text-[#be3455] text-left">
              Includes {noOfWeddingCrests ? "Wedding crest" : ""}
              {noOfWeddingCrests && noOfIllustrations ? " + " : ""}
              {noOfIllustrations ? "Caricature" : ""}
            </div>
          )}
        </div>
        <button className="bg-[#be3455] text-xl font-bold px-8 py-3 text-white rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CartSection;
