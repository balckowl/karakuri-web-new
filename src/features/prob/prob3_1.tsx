import { useEffect, useState } from "react";


const Prob3_1 = () => {
  function deepCopy2DArray(arr: any) {
    return arr.map(function (subArray: any) {
      return Array.isArray(subArray) ? deepCopy2DArray(subArray) : subArray;
    });
  }

  const isvalid = (i: number, j: number) => {
    
    if (0 <= i && i < gridSize && 0 <= j && j < gridSize) {
      if (grid[i]?.[j] != "#") {
        return true
      }
    }
    return false
  }

  const handleMove = (operate: string) => {
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
    if (x == 0 && y == 3) {
      console.log("goal")
    }
  }

useEffect(() => {
  const newGrid = deepCopy2DArray(grid)
  newGrid[0][0] = "R"
  setGrid(newGrid)
}, []);

  const gridSize = 5
  const [playerX, setPlayerX] = useState<number>(0);
  const [playerY, setPlayerY] = useState<number>(0);
  const [direction, setDirection] = useState<string>("R");
  const [grid, setGrid] = useState<string[][]>(
    [
      [".", ".", ".", ".", "."],
      [".", "#", "#", "#", "."],
      [".", "#", "G", "#", "."],
      [".", "#", "@", "#", "."],
      [".", ".", ".", ".", "."],
    ]
  );

  return (
    <div className="relative size-full">
      <div className="flex h-full items-center flex-col mx-auto justify-center">
        <div className="mx-auto outline mb-12">
          {grid.map((mass, index) => (
            <div key={index} className="flex">
              {mass.map((item, index) => (
                <div
                  key={index}
                  className={`w-[90px] h-[90px] border-black dark:border-white border-[1px] ${item == "#" && "bg-black dark:bg-white"}`}
                >
                  <p className="h-full flex items-center justify-center text-4xl font-bold">
                    {"URDLG".includes(item) && item}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 操作盤 */}
      <div className="absolute right-10 bottom-2">
        <div className="flex justify-center w-full">
          <kbd
            onClick={()=>handleMove("U")}
            className="kbd cursor-pointer select-none hover:opacity-80 transition-all">▲</kbd>
        </div>
        <div className="flex justify-center gap-12 w-full">
          <kbd
            onClick={()=>handleMove("L")}
            className="kbd cursor-pointer select-none hover:opacity-80 transition-all">◀︎</kbd>
          <kbd
            onClick={()=>handleMove("R")}
            className="kbd cursor-pointer select-none hover:opacity-80 transition-all">▶︎</kbd>
        </div>
        <div className="flex justify-center w-full">
          <kbd
            onClick={()=>handleMove("D")}
            className="kbd cursor-pointer select-none hover:opacity-80 transition-all">▼</kbd>
        </div>
      </div>
    </div>
  )
}

export default Prob3_1