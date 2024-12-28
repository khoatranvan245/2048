"use client"
import findZeroSquare from "@/utils/findZeroSquare"
import { useEffect, useState } from "react"

const Board = () => {
  const [array, setArray] = useState<number[][]>(
    [
      [0, 0, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0],
      [2, 2, 0, 4]
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

  return <div className="w-[440px] h-[440px] border-t border-l border-black ">
    {array.map((row, rowIndex) => {
      return <div className="grid grid-cols-4 h-[110px]" key={rowIndex}>
        {row.map((cell, cellIndex) => <div key={cellIndex} className="border-black border-b border-r flex justify-center items-center">{cell > 0 ? cell : ""}</div>)}
      </div>
    })}
  </div>
}

export default Board
