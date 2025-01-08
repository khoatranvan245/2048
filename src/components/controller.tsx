"use client"
import findZeroSquare from "@/utils/findZeroSquare"
import { useEffect } from "react"
const Controller = ({ array, setArray, setScore, setGameState }: { array: number[][], setArray: React.Dispatch<React.SetStateAction<number[][]>>, setScore: React.Dispatch<React.SetStateAction<number>>, setGameState: React.Dispatch<React.SetStateAction<"start" | "end">> }) => {
  const leftButtonAction = () => {
    const newArray = array
    let sumPoint = 0
    for (let i = 0; i < newArray.length; i++) {
      let sumCount = 0
      for (let j = 0; j < newArray[i].length; j++) {
        for (let k = j; k >= 0; k--) {
          if (newArray[i][k] != 0 && newArray[i][k - 1] == 0) {
            newArray[i][k - 1] = newArray[i][k]
            newArray[i][k] = 0
          }
          if (newArray[i][k] == newArray[i][k - 1]) {
            sumCount++
            newArray[i][k - 1] *= 2 * Math.pow(10, sumCount)
            newArray[i][k] = 0
          }
        }
      }

      for (let j = 0; j < newArray[i].length; j++) {
        if (newArray[i][j] % 10 == 0) {
          while (newArray[i][j] % 10 == 0 && newArray[i][j] != 0) {
            newArray[i][j] = newArray[i][j] / 10
          }
          sumPoint += newArray[i][j]
        }
      }
    }
    setScore(prev => prev + sumPoint)
    setArray([...newArray])
    // hello this is a comment
  }

  const rightButtonAction = () => {
    const newArray = array
    let sumPoint = 0

    for (let i = 0; i < newArray.length; i++) {
      let sumCount = 0
      for (let j = newArray[i].length - 1; j >= 0; j--) {
        for (let k = j; k < newArray.length; k++) {
          if (newArray[i][k] != 0 && newArray[i][k + 1] == 0) {
            newArray[i][k + 1] = newArray[i][k]
            newArray[i][k] = 0
          }
          if (newArray[i][k] == newArray[i][k + 1]) {
            sumCount++
            newArray[i][k + 1] *= 2 * Math.pow(10, sumCount)
            newArray[i][k] = 0
          }
        }
      }

      for (let j = 0; j < newArray[i].length; j++) {
        if (newArray[i][j] % 10 == 0) {
          while (newArray[i][j] % 10 == 0 && newArray[i][j] != 0) {
            newArray[i][j] = newArray[i][j] / 10
          }
          sumPoint += newArray[i][j]
        }
      }
    }

    setScore(prev => prev + sumPoint)
    setArray([...newArray])
  }

  const downButtonAction = () => {
    const newArray = array
    let sumPoint = 0
    for (let i = 0; i < newArray.length; i++) {
      let sumCount = 0
      for (let j = newArray.length - 1; j >= 0; j--) {
        for (let k = j; k < newArray.length - 1; k++) {
          if (newArray[k][i] != 0 && newArray[k + 1][i] == 0) {
            newArray[k + 1][i] = newArray[k][i]
            newArray[k][i] = 0
          }
          if (newArray[k][i] == newArray[k + 1][i]) {
            sumCount++
            newArray[k + 1][i] *= 2 * Math.pow(10, sumCount)
            newArray[k][i] = 0
          }
        }
      }

      for (let j = 0; j < newArray[i].length; j++) {
        if (newArray[j][i] % 10 == 0) {
          while (newArray[j][i] % 10 == 0 && newArray[j][i] != 0) {
            newArray[j][i] = newArray[j][i] / 10
          }
          sumPoint += newArray[j][i]
        }
      }
    }

    setScore(prev => prev + sumPoint)
    setArray([...newArray])
  }

  const upButtonAction = () => {
    const newArray = array
    let sumPoint = 0
    for (let i = 0; i < newArray.length; i++) {
      let sumCount = 0
      for (let j = 0; j < newArray.length; j++) {
        for (let k = j; k > 0; k--) {
          if (newArray[k][i] != 0 && newArray[k - 1][i] == 0) {
            newArray[k - 1][i] = newArray[k][i]
            newArray[k][i] = 0
          }
          if (newArray[k][i] == newArray[k - 1][i]) {
            sumCount++
            newArray[k - 1][i] *= 2 * Math.pow(10, sumCount)
            newArray[k][i] = 0
          }
        }
      }

      for (let j = 0; j < newArray[i].length; j++) {
        if (newArray[j][i] % 10 == 0) {
          while (newArray[j][i] % 10 == 0 && newArray[j][i] != 0) {
            newArray[j][i] = newArray[j][i] / 10
          }
          sumPoint += newArray[j][i]
        }
      }

    }

    setScore(prev => prev + sumPoint)
    setArray([...newArray])
  }

  const generateRandomSquare = () => {
    const zeroSquareList = findZeroSquare(array)

    const randomSquare = zeroSquareList[Math.floor(Math.random() * zeroSquareList.length)];

    let newArray = array

    newArray[randomSquare[0]][randomSquare[1]] = 2
    setArray([...newArray])
  }

  const keyDownEvent = (event: KeyboardEvent) => {
    const key = event.key
    if (findZeroSquare(array).length == 0) {
      setGameState("end")
    }
    else {
      switch (key) {
        case "ArrowLeft":
          leftButtonAction()
          generateRandomSquare()
          break
        case "ArrowRight":
          rightButtonAction()
          generateRandomSquare()
          break
        case "ArrowDown":
          downButtonAction()
          generateRandomSquare()
          break
        case "ArrowUp":
          upButtonAction()
          generateRandomSquare()
          break
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keyDownEvent)
    return () => {
      document.removeEventListener("keydown", keyDownEvent)
    }
  }, [])
  return <div className="text-white"></div>
}

export default Controller
