import Image from "next/image"
import { usePlayerDataStore } from "~/store/playerDataStore";
import Prob1_1Answer from "~/features/answerColumn/prob1_1Answer";

const Prob1_1 = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();

  const fitScrollBar = () => {
    setPlayerData(
      {
        belonging: "",
        belongingList: playerData.belongingList.filter(item => item !== "scrollBar"),
        entrance: {
          ...playerData.entrance,
          isFitScrollbar: true
        },
      }
    )
  }

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex h-full flex-col items-center justify-center gap-10">
        <div className="relative mx-auto flex h-max max-w-[490px] flex-col">
          {/* hello */}
          <div className="flex h-[150px] select-none items-end outline outline-2 outline-black">
            <Image
              src="/images/floor1/prob/prob1_1/HELLO_up.png"
              alt="HELLO-up"
              width={980}
              height={105}
              className="h-[52px]"
            />
          </div>
          <div
            className={`h-[150px] select-none overflow-hidden outline outline-2  outline-black
            ${playerData.entrance.isFitScrollbar && "overflow-x-scroll"}`}
          >
            <div className="flex w-[648px] justify-end">
              <div className="w-[490px] overflow-hidden">
                <Image
                  src="/images/floor1/prob/prob1_1/HELLO_down.png"
                  alt="HELLO-down"
                  width={980}
                  height={70}
                  className="h-[35px]"
                />
              </div>
            </div>
          </div>
          {/* スクロールバーをはめ込むところ */}
          {playerData.entrance.isFitScrollbar == false &&
            <div
              className="absolute bottom-0 h-[16px] w-full max-w-[490px] cursor-pointer outline outline-2 outline-black"
              onClick={playerData.belonging == "scrollBar" ? fitScrollBar : undefined}
            >
            </div>
          }
        </div>
        <Image
          src="/images/floor1/prob/prob1_1/left_arrow.png"
          alt="left_arrow"
          width={100}
          height={100}
          className="size-[100px] rotate-180"
        />
      </div>

      {/* 回答欄 */}
      <div className="absolute bottom-10 right-10">
        <Prob1_1Answer />
      </div>

    </div>

  )
}

export default Prob1_1