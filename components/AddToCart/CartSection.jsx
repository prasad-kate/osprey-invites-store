import { useGetTotal } from "@/lib/utils";
import { ChevronRight, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

function CartSection() {
  const { total, noOfPieces, noOfWeddingCrests, noOfIllustrations } =
    useGetTotal();

  const isAnyProductSelected = noOfWeddingCrests || noOfIllustrations;

  return (
    <div className="bg-[#b79234] fixed bottom-0 right-0 w-full lg:w-[48%]  rounded-t-xl text-center text-white ">
      <div className="my-1 text-sm">Save 50% on order for your spouse</div>
      <div className="bg-white rounded-t-xl border border-[#b79234] flex items-center justify-between gap-2 p-4">
        <div className="flex-1">
          <div className="flex items-center flex-wrap gap-2">
            <div className="text-[#92711b] font-bold text-xl ">{total}/-</div>
            <div className="text-[#9195a4] text-xs sm:text-sm">
              Intro + page in cart
            </div>
          </div>
          {!!isAnyProductSelected && (
            <div className="text-[#be3455] text-left text-xs sm:text-sm">
              Includes {noOfWeddingCrests ? "Wedding crest" : ""}
              {noOfWeddingCrests && noOfIllustrations ? " + " : ""}
              {noOfIllustrations ? "Illustrations" : ""}
            </div>
          )}
        </div>
        <button
          className={`text-xl font-bold px-8 py-3 text-white rounded-md bg-[#be3455] ${
            !isAnyProductSelected ? "opacity-80" : ""
          }`}
          onClick={() =>
            toast(`${noOfPieces} items added to the cart`, {
              description: "Please check cart section for payment",
              action: {
                label: (
                  <div className="flex ">
                    <ShoppingCart />
                    <ChevronRight className="text-xs" />
                  </div>
                ),
                onClick: () => ({}),
              },
            })
          }
          title={!isAnyProductSelected ? "Please select some products" : ""}
          disabled={!isAnyProductSelected}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CartSection;
