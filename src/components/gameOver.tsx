const GameOver = ({ children }: { children: React.ReactNode }) => {
  return <div className="absolute bg-black w-screen h-screen flex flex-col justify-center items-center gap-[30px]">
    <p className="text-white text-[30px] font-bold">Game Over</p>
    <div className="h-200px flex flex-col gap-[30px] justify-center items-center">
      {children}
    </div>
  </div>
}

export default GameOver

