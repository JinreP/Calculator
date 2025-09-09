"use client";
import { Operators } from "./Operator";
import { useState } from "react";
export function Numbers(numberProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <button className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.seven}
        </button>
        <button className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.eight}
        </button>
        <button className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.nine}
        </button>
        <button className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.divide}
        </button>
      </div>
      <div className="flex gap-4">
        <button className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.four}
        </button>
        <button className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.five}
        </button>
        <button className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.six}
        </button>
        <button className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.x}
        </button>
      </div>
      <div className="flex gap-4">
        <button className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.one}
        </button>
        <button className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.two}
        </button>
        <button className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.three}
        </button>
        <button className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.minus}
        </button>
      </div>
      <div className="flex gap-4">
        <button className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.zero}
        </button>
        <button className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.dot}
        </button>
        <button className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.tentsu}
        </button>
        <button className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.plus}
        </button>
      </div>
    </div>
  );
}
