import { clsx } from "clsx";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatToIndianCurrency(number, round) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: round ? 0 : 2,
    maximumFractionDigits: round ? 0 : 2,
  }).format(number);
}

export const useGetTotal = () => {
  const { noOfPieces, noOfWeddingCrests, noOfIllustrations } = useSelector(
    (state) => state.product
  );

  const weddingCrestPrice =
    (noOfWeddingCrests ? noOfWeddingCrests : 0) * noOfPieces;
  const illustrationPrice =
    (noOfIllustrations ? noOfIllustrations : 0) * noOfPieces;

  const total = formatToIndianCurrency(weddingCrestPrice + illustrationPrice);

  return {
    total,
    noOfPieces,
    noOfWeddingCrests,
    noOfIllustrations,
  };
};
