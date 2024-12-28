"use client"
import findZeroSquare from "@/utils/findZeroSquare"
import { useEffect, useState } from "react"
import Square from "./square"

const Board = () => {
  const [array, setArray] = useState<number[][]>(
    [
      [0, 0, 0, 0],
      [0, 0, 2, 0],
      [0, 0, 0, 0],
      [0, 2, 0, 0]
    ]
  )

  const leftButtonAction = () => {
    const newArray = array

    for (let i = 0; i < newArray.length; i++) {
      for (let j = 0; j < newArray[i].length; j++) {
        for (let k = j; k >= 0; k--) {
          if (newArray[i][k] != 0 && newArray[i][k - 1] == 0) {
            newArray[i][k - 1] = newArray[i][k]
            newArray[i][k] = 0
          }
          if (newArray[i][k] == newArray[i][k - 1]) {
            newArray[i][k - 1] *= 20
            newArray[i][k] = 0
          }
        }
      }

      for (let j = 0; j < newArray[i].length; j++) {
        if (newArray[i][j] % 10 == 0) newArray[i][j] /= 10
      }

    }

    setArray([...newArray])
  }

  const rightButtonAction = () => {
    const newArray = array

    for (let i = 0; i < newArray.length; i++) {
      for (let j = newArray[i].length - 1; j >= 0; j--) {
        for (let k = j; k < newArray.length; k++) {
          if (newArray[i][k] != 0 && newArray[i][k + 1] == 0) {
            newArray[i][k + 1] = newArray[i][k]
            newArray[i][k] = 0
          }
          if (newArray[i][k] == newArray[i][k + 1]) {
            newArray[i][k + 1] *= 20
            newArray[i][k] = 0
          }
        }
      }

      for (let j = 0; j < newArray[i].length; j++) {
        if (newArray[i][j] % 10 == 0) newArray[i][j] /= 10
      }
    }

    setArray([...newArray])
  }

  const downButtonAction = () => {
    const newArray = array

    for (let i = 0; i < newArray.length; i++) {
      for (let j = newArray.length - 1; j >= 0; j--) {
        for (let k = j; k < newArray.length - 1; k++) {
          if (newArray[k][i] != 0 && newArray[k + 1][i] == 0) {
            newArray[k + 1][i] = newArray[k][i]
            newArray[k][i] = 0
          }
          if (newArray[k][i] == newArray[k + 1][i]) {
            newArray[k + 1][i] *= 20
            newArray[k][i] = 0
          }
        }
      }

      for (let j = 0; j < newArray[i].length; j++) {
        if (newArray[j][i] % 10 == 0) newArray[j][i] /= 10
      }
    }

    setArray([...newArray])
  }

  const upButtonAction = () => {
    const newArray = array

    for (let i = 0; i < newArray.length; i++) {
      for (let j = 0; j < newArray.length; j++) {
        for (let k = j; k > 0; k--) {
          if (newArray[k][i] != 0 && newArray[k - 1][i] == 0) {
            newArray[k - 1][i] = newArray[k][i]
            newArray[k][i] = 0
          }
          if (newArray[k][i] == newArray[k - 1][i]) {
            newArray[k - 1][i] *= 2
            newArray[k][i] = 0
          }
        }
      }

      for (let j = 0; j < newArray[i].length; j++) {
        if (newArray[j][i] % 10 == 0) newArray[j][i] /= 10
      }

    }

    setArray([...newArray])
  }

  const generateRandomSquare = () => {
    const zeroSquareList = findZeroSquare(array)

    const randomSquare = zeroSquareList[Math.floor(Math.random() * zeroSquareList.length)];

    let newArray = array

    newArray[randomSquare[0]][randomSquare[1]] = 2
    setArray([...newArray])
  }

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      const key = event.key
      switch (key) {
        case "ArrowLeft":
          leftButtonAction()
          break
        case "ArrowRight":
          rightButtonAction()
          break
        case "ArrowDown":
          downButtonAction()
          break
        case "ArrowUp":
          upButtonAction()
          break
      }

      generateRandomSquare()
    })
  }, [])

  return <div className="bg-[#1e242b] rounded-lg p-4 flex flex-col gap-4">
    {array.map((row, rowIndex) => {
      return <div className="grid grid-cols-4 w-[448px] h-[100px] bg-[#1e242b] gap-4" key={rowIndex}>
        {row.map((squareNumber, squareIndex) => <Square num={squareNumber} key={squareIndex} />)}
      </div>
    })}
  </div>
}

export default Board
