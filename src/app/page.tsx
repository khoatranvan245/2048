"use client"
import Board from "@/components/board";
import { useState } from "react";

export default function Home() {
  const [array, setArray] = useState<number[][]>(
    [
      [0, 0, 0, 0],
      [0, 0, 2, 0],
      [0, 0, 0, 0],
      [2, 2, 2, 2]
    ]
  )

  const [score, setScore] = useState<number>(0)

  return <div className="h-screen w-screen flex flex-col justify-center items-center bg-black">
    <Board array={array} setArray={setArray} setScore={setScore} />

    <h1 className="text-white">{score}</h1>
  </div>
}
