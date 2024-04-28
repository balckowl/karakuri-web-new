import { useEffect, useState } from "react";
import Image from "next/image";
import { usePlayerDataStore } from "~/store/playerDataStore";
import { motion } from 'framer-motion';

const Prob3_1 = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();

  const [isGoal, setisGoal] = useState<boolean>(false);

  function deepCopy2DArray(arr: any) {
    return arr.map(function (subArray: any) {
      return Array.isArray(subArray) ? deepCopy2DArray(subArray) : subArray;
    });
  }

  const isvalid = (i: number, j: number) => {

    if (0 <= i && i < gridSize && 0 <= j && j < gridSize) {
      if (grid[i]?.[j] != "#" && grid[i]?.[j] != "@") {
        return true
      }
    }
    return false
  }

  const handleMove = (operate: string) => {
    // すでにクリアしている場合は処理を行わない
    if(playerData.dragon2.isClear){
      return
    }
    let x = playerX
    let y = playerY
    let dir = direction
    if (operate == "U") {
      if (isvalid(playerX - 1, playerY)) {
        x -= 1
        dir = "U"
      }
    } else if (operate == "D") {
      if (isvalid(playerX + 1, playerY)) {
        x += 1
        dir = "D"
      }
    } else if (operate == "L") {
      if (isvalid(playerX, playerY - 1)) {
        y -= 1
        dir = "L"
      }
    } else if (operate == "R") {
      if (isvalid(playerX, playerY + 1)) {
        y += 1
        dir = "R"
      }
    }
    const newGrid = deepCopy2DArray(grid)
    newGrid[playerX][playerY] = "."
    newGrid[x][y] = dir
    newGrid[2][2] = "G"
    setGrid(newGrid)
    setPlayerX(x)
    setPlayerY(y)
    setDirection(dir)
    // クリア
    if (x == 2 && y == 2) {
      setisGoal(true)
      setPlayerData(
        {
          progress: 7,
          movableRoomList: [...playerData.movableRoomList, "office"],
          dragon2: {
            ...playerData.dragon2,
            isFirstClear: true,
            isClear: true,
          }
        }
      )
    }
  }

  const gridSize = 5
  const [playerX, setPlayerX] = useState<number>(0);
  const [playerY, setPlayerY] = useState<number>(0);
  const [direction, setDirection] = useState<string>("R");
  const [grid, setGrid] = useState<string[][]>(
    [
      ["R", ".", ".", ".", "."],
      [".", "#", "#", "#", "."],
      [".", "#", "G", "#", "."],
      [".", "#", "@", "#", "."],
      [".", ".", ".", ".", "."],
    ]
  );

  useEffect(() => {
    if(playerData.dragon2.isCrachRock){
      const newGrid = deepCopy2DArray(grid)
      newGrid[3][2] = "."
      setGrid(newGrid)
    }
  },[])
  
  const clickRockCarck = () => {
    if(playerData.belonging == "hammer"){
      const newGrid = deepCopy2DArray(grid)
      newGrid[3][2] = "."
      setGrid(newGrid)
      setPlayerData(
        {
          dragon2: {
            ...playerData.dragon2,
            isCrachRock: true
          }
        }
      )
    }else{
      setPlayerData(
        {
          dragon2: {
            ...playerData.dragon2,
            isClickRockCrack: true,
          }
        }
      )
    }
  }
  return (
    <div className="relative size-full">
      <div className="mx-auto flex h-full flex-col items-center justify-center">
        <div className="mx-auto mb-12 outline">
          {grid.map((col, index) => (
            <div key={index} className="flex">
              {col.map((mass, jndex) => (
                <div key={jndex}>
                  {mass === "#" ?
                    <div
                      className="size-[90px] border-DEFAULT border-black bg-black"
                    ></div>
                  : mass === "@" ?
                    <div 
                      onClick={() => clickRockCarck()}
                      className="size-[90px] cursor-pointer border-DEFAULT border-black"
                    >
                      <Image src="/images/floor3/gimmick/rock_crack.png" alt="img2" width="90" height="90" />
                    </div>
                  : mass == "." ? 
                    <div className="size-[90px] border-[1px] border-black"></div>
                  : mass == "G" ? 
                    <div className="size-[90px] border-[1px] border-black">
                      <div className="relative flex h-full items-center justify-center text-4xl font-bold">
                        <Image src="/images/floor3/gimmick/flag.png" alt="flag" className="size-[50px] object-fill" width="2000" height="2000" />
                        <motion.div
                          className="absolute size-[100px] cursor-pointer rounded-full border-[6px] border-yellow-200"
                          initial={{ scale: 1 }}
                          animate={{ scale: isGoal ? 5 : 0.5, opacity: isGoal ? [1,0] : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                        </motion.div>
                      </div>
                    </div>
                  :"URDL".includes(mass) &&
                    <div className="size-[90px] border-[1px] border-black">
                      <div className="flex h-full items-center justify-center text-4xl font-bold">
                        <Image src="/images/other/k-15.webp" alt="main" className="size-[50px] rounded-full object-fill" width="2000" height="2000" />
                      </div>
                    </div>
                  }

                </div>

              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 操作盤 */}
      <div className="absolute bottom-2 right-10">
        <div className="flex w-full justify-center">
          <kbd
            onClick={() => handleMove("U")}
            className="kbd cursor-pointer select-none transition-all hover:opacity-60">▲</kbd>
        </div>
        <div className="flex w-full justify-center gap-12">
          <kbd
            onClick={() => handleMove("L")}
            className="kbd cursor-pointer select-none transition-all hover:opacity-60">◀︎</kbd>
          <kbd
            onClick={() => handleMove("R")}
            className="kbd cursor-pointer select-none transition-all hover:opacity-60">▶︎</kbd>
        </div>
        <div className="flex w-full justify-center">
          <kbd
            onClick={() => handleMove("D")}
            className="kbd cursor-pointer select-none transition-all hover:opacity-60">▼</kbd>
        </div>
      </div>
    </div>
  )
}

export default Prob3_1