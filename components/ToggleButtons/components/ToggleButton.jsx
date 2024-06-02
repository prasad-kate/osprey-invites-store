"use client";

import { useSelector } from "react-redux";
import CustomToggleButton from "./CustomToggleButton";

function ToggleGroupDemo() {
  const { noOfPieces } = useSelector((state) => state.product);

  return (
    <div className="flex items-center gap-3">
      <CustomToggleButton
        text={"20 pcs"}
        pieces={20}
        activeNoOfPieces={noOfPieces}
      />
      <CustomToggleButton
        text={"50 pcs"}
        pieces={50}
        activeNoOfPieces={noOfPieces}
      />
      <CustomToggleButton
        text={"100 pcs"}
        pieces={100}
        activeNoOfPieces={noOfPieces}
      />
    </div>
  );
}

export default ToggleGroupDemo;
