"use client";

import { useSelector } from "react-redux";
import CustomToggleButton from "./components/CustomToggleButton";

function ToggleButtons() {
  const { noOfPieces } = useSelector((state) => state.product);

  return (
    <div className="flex gap-4 p-4 items-center">
      <div className="text-[#92711b] text-lg">Quantity:</div>
      <div className="flex items-center gap-2">
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
    </div>
  );
}

export default ToggleButtons;
