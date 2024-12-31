const ScoreBoard = ({ score, highScore }: { score: number, highScore: number }) => {
  return <div className="flex text-white w-[300px] justify-between">
    <div className="bg-[#1e242b] w-[130px] flex justify-center items-center flex-col py-[10px] rounded-lg">
      <p className="text-center text-[#ab4459] text-[20px]">Score</p>
      <p className="text-center text-[#ab4459] text-[24px] font-bold">{score}</p>
    </div>
    <div className="bg-[#1e242b] w-[130px] flex justify-center items-center flex-col py-[10px] rounded-lg">
      <p className="text-center text-[#0a5eb0] text-[20px]">Best</p>
      <p className="text-center text-[#0a5eb0] text-[24px] font-bold">{highScore}</p>
    </div>
  </div>
}

export default ScoreBoard
