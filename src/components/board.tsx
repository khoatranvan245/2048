"use client"
import Square from "./square"

const Board = ({ array }: { array: number[][] }) => {


  return <div className="bg-[#1e242b] rounded-lg p-4 flex flex-col gap-4">
    {array.map((row, rowIndex) => {
      return <div className="grid grid-cols-4 w-[448px] h-[100px] bg-[#1e242b] gap-4" key={rowIndex}>
        {row.map((squareNumber, squareIndex) => <Square num={squareNumber} key={squareIndex} />)}
      </div>
    })}
  </div>
}

export default Board
