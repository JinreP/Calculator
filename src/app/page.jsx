"use client";

import { useState } from "react";
import { Operators } from "../components/Operator";
import { Numbers } from "../components/Numbers";
export default function Home() {
  const [display, setDisplay] = useState(0);
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const clearDisplay = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };




    return (
      <div className="flex flex-col w-full h-screen items-center justify-center bg-black ">
        <div className="w-[290px] h-[420px] flex flex-col gap-2 ">
          <input
            type="text"
            value={display}
            readOnly
            className="w-[100%]  h-[60px] text-black bg-white text-5xl font-bold "
          />
          <Operators symbol="(" symbol2=")" symbol3="%" clear="AC" />
          <Numbers
            four="4"
            five="5"
            six="6"
            one="1"
            two="2"
            three="3"
            seven="7"
            eight="8"
            nine="9"
            divide="÷"
            zero="0"
            plus="+"
            dot="."
            minus="-"
            tentsu="="
            x="x"

          />
        </div>
      </div>
    );
  }

