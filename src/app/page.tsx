"use client"
import Board from "@/components/board";
import ScoreBoard from "@/components/scoreBoard";
import { useEffect, useState } from "react";
import NewGameButton from "@/components/newGameButton";
import Controller from "@/components/controller";
import createRandomArray from "@/utils/createRandomArray";
export default function Home() {

  const [gameState, setGameState] = useState<"start" | "end">("start")
  const [array, setArray] = useState<number[][]>(createRandomArray())
  const [score, setScore] = useState<number>(0)
  const [highScore, setHighScore] = useState<number>(Number(localStorage.getItem("high-score")) | 0)
  useEffect(() => {
    if (gameState == "end" && score > highScore) {
      localStorage.setItem("high-score", score.toString())
      setHighScore(score)
    }
  }, [gameState])
  return <div className="h-screen w-screen flex flex-col justify-center items-center bg-black">
    <ScoreBoard score={score} highScore={highScore} />
    <Board array={array} />
    <NewGameButton setScore={setScore} setGameState={setGameState} setArray={setArray} />
    {gameState == "start" && <Controller array={array} setArray={setArray} setScore={setScore} setGameState={setGameState} />}
  </div>
}


