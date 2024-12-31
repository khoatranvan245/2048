"use client"
import createRandomArray from "@/utils/createRandomArray"

const NewGameButton = ({ setArray, setGameState, setScore }: { setGameState: React.Dispatch<React.SetStateAction<"start" | "end">>, setArray: React.Dispatch<React.SetStateAction<number[][]>>, setScore: React.Dispatch<React.SetStateAction<number>> }) => {
  return <button className="w-[100px] bg-white text-black " onClick={() => {
    setArray(createRandomArray())
    setGameState("start")
    setScore(0)
  }}>New Game</button>
}

export default NewGameButton
