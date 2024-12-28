"use client"

import { useEffect, useRef } from "react"

const Square = ({ num }: { num: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    switch (num) {
      case 0:
        ref.current!.style.background = "#000000"
        break;
      case 2:
        ref.current!.style.background = "#543A14"
        break;
      case 4:
        ref.current!.style.background = "#AB4459"
        break;
      case 8:
        ref.current!.style.background = "#0A5EB0"
        break;
      case 16:
        ref.current!.style.background = "#441752"
        break;
      case 32:
        ref.current!.style.background = "#387478"
        break;
      case 64:
        ref.current!.style.background = "#B17457"
        break;
      case 128:
        ref.current!.style.background = "#1E3E62"
        break;
      case 256:
        ref.current!.style.background = "#3C3D37"
        break;
      case 512:
        ref.current!.style.background = "#A04747"
        break;
      case 1024:
        ref.current!.style.background = "#379777"
        break;
      case 2048:
        ref.current!.style.background = "#AB4459"
        break;
    }
  }, [num])
  return <div ref={ref} className="text-lg text-white flex justify-center items-center font-bold rounded-lg">{num != 0 ? num : ""}</div>
}

export default Square
