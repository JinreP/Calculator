"use client";

import { useState } from "react";
import { Operators } from "../components/Operator";
import { Numbers } from "../components/Numbers";
export default function Home() {
 




    return (
      <div className="flex flex-col w-full h-screen items-center justify-center bg-black ">
        <div className="w-[290px] h-[420px] flex flex-col gap-2 ">
  
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
             symbol="(" symbol2=")" symbol3="%" clear="AC" 

          />
        </div>
      </div>
    );
  }

