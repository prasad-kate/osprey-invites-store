import React from "react";
import ToggleGroupButtons from "./components/ToggleButton";

function ToggleButtons() {
  return (
    <div className="flex gap-4 p-4 items-center">
      <div className="text-[#92711b] text-lg">Quantity:</div>
      <ToggleGroupButtons />
    </div>
  );
}

export default ToggleButtons;
