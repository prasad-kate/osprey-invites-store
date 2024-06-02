"use client";
import { setNoOfPieces } from "@/store/slices/productSlice";
import React from "react";
import { useDispatch } from "react-redux";

function CustomToggleButton({ text, activeNoOfPieces, pieces }) {
  const isActive = activeNoOfPieces === pieces;
  const dispatch = useDispatch();
  return (
    <div
      className={`
      px-2 py-1 rounded-sm text-[#92711b] cursor-pointer transition-all duration-200 ease-in text-nowrap
      border ${isActive ? "border-[#efe4c6]" : "border-[#92711b]"}
      bg-[${isActive ? "#efe4c6" : "red"}]
      `}
      onClick={() => dispatch(setNoOfPieces(pieces))}
    >
      {text}
    </div>
  );
}

export default CustomToggleButton;
