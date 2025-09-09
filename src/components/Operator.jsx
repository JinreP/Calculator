"use client";

import { useState } from "react";

export function Operators(operatorProps) {
  return (
    <div className="flex gap-4 ">
      <button className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
        {operatorProps.symbol}
      </button>
      <button className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
        {operatorProps.symbol2}
      </button>
      <button className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
        {operatorProps.symbol3}
      </button>
      <button className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl  " >
        {operatorProps.clear}
      </button>
    </div>
  );
}
