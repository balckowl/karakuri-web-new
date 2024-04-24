import { useEffect, useState } from "react";
import Image from "next/image";

const Prob3_1 = () => {
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
                      className="size-[90px] border-DEFAULT border-black"
                    >
                      <Image src="/images/floor3/gimmick/rock_crack.png" alt="img2" width="90" height="90" />
                    </div>
                  :
                    <div
                      className="size-[90px] border-DEFAULT border-black"
                    >
                      <p className="flex h-full items-center justify-center text-4xl font-bold">
                        {"URDLG".includes(mass) && mass}
                      </p>
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
            className="kbd cursor-pointer select-none transition-all hover:opacity-80">▲</kbd>
        </div>
        <div className="flex w-full justify-center gap-12">
          <kbd
            onClick={() => handleMove("L")}
            className="kbd cursor-pointer select-none transition-all hover:opacity-80">◀︎</kbd>
          <kbd
            onClick={() => handleMove("R")}
            className="kbd cursor-pointer select-none transition-all hover:opacity-80">▶︎</kbd>
        </div>
        <div className="flex w-full justify-center">
          <kbd
            onClick={() => handleMove("D")}
            className="kbd cursor-pointer select-none transition-all hover:opacity-80">▼</kbd>
        </div>
      </div>
    </div>
  )
}

export default Prob3_1