"use client";
import { useState } from "react";
export function Numbers(numberProps) {
  const [display, setDisplay] = useState(0);
  const seven = () => {
    setDisplay(7);
  };
  const six = () => {
    setDisplay(6);
  };

  const five = () => {
    setDisplay(5);
  };
  const four = () => {
    setDisplay(4);
  };

  const two = () => {
    setDisplay(2);
  };
  const one = () => {
    setDisplay(1);
  };

  const three = () => {
    setDisplay(3);
  };
  const eight = () => {
    setDisplay(8);
  };
  const zero = () => {
    setDisplay(0);
  };
  const nine = () => {
    setDisplay(9);
  };

  const plus = () => {
    setDisplay("+");
  };
  const x = () => {
    setDisplay("x");
  };

  const tentsu = () => {
    setDisplay(...display + display)
  };
  const clearDisplay = () => {
    setDisplay("0");
  };
  const minus = () => {
    setDisplay("-");
  };
  const divide = () => {
    setDisplay("/");
  };

  const operators = () => {
    divide(...display === "");
    plus(...display === "+");
  
    minus(display - display);
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        value={display}
        readOnly
        className="w-[100%]  h-[60px] text-black bg-white text-5xl font-bold "
      />
      <div className="flex gap-4">
        <button className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.symbol}
        </button>
        <button className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.symbol2}
        </button>
        <button className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.symbol3}
        </button>
        <button
          className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl  "
          onClick={clearDisplay}
        >
          {numberProps.clear}
        </button>
      </div>
      <div className="flex gap-4">
        <button
          className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl "
          onClick={seven}
        >
          {numberProps.seven}
        </button>
        <button
          className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl"
          onClick={eight}
        >
          {numberProps.eight}
        </button>
        <button
          className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl"
          onClick={nine}
        >
          {numberProps.nine}
        </button>
        <button
          className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl"
          onClick={divide}
        >
          {numberProps.divide}
        </button>
      </div>
      <div className="flex gap-4">
        <button
          className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl"
          onClick={four}
        >
          {numberProps.four}
        </button>
        <button
          className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl"
          onClick={five}
        >
          {numberProps.five}
        </button>
        <button
          className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl"
          onClick={six}
        >
          {numberProps.six}
        </button>
        <button
          className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl"
          onClick={x}
        >
          {numberProps.x}
        </button>
      </div>
      <div className="flex gap-4">
        <button
          className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl"
          onClick={one}
        >
          {numberProps.one}
        </button>
        <button
          className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl"
          onClick={two}
        >
          {numberProps.two}
        </button>
        <button
          className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl"
          onClick={three}
        >
          {numberProps.three}
        </button>
        <button
          className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl"
          onClick={minus}
        >
          {numberProps.minus}
        </button>
      </div>
      <div className="flex gap-4">
        <button
          className="bg-gray-100 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl"
          onClick={zero}
        >
          {numberProps.zero}
        </button>
        <button className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl">
          {numberProps.dot}
        </button>
        <button
          className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl"
          onClick={tentsu}
        >
          {numberProps.tentsu}
        </button>
        <button
          className="bg-blue-200 w-[60px] h-[60px] text-center cursor-pointer rounded-2xl"
          onClick={plus}
        >
          {numberProps.plus}
        </button>
      </div>
    </div>
  );
}
