import { usePlayerDataStore } from "~/store/playerDataStore";
import Prob1_1Answer from "~/app/_components/elements/answerColumn/prob1_1Answer";
import Image from "next/image";

const Prob2_1 = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();


  return (
    <div className="flex h-full items-center justify-center">

      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
            <Image src="/images/floor2/room/bamboo.webp" alt="bamboo" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-9xl font-black grid place-content-center">DAISY</div>
        </div>
        <div className="diff-resizer"></div>
      </div>
      {/* 回答欄 */}
      <div className="absolute bottom-10 right-10">
        <Prob1_1Answer />
      </div>

    </div>

  )
}

export default Prob2_1