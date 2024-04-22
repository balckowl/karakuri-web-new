import Image from "next/image";
import Prob2_1Answer from "~/features/answerColumn/prob2_1Answer";

const Prob2_1 = () => {

  return (
    <div className="flex h-full items-center justify-center">

      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="grid place-content-center text-9xl font-black text-primary-content">
            <Image src="/images/floor2/gimmick/prob2_1_img2.png" alt="img2" width="1600" height="900" className="absolute left-0 top-0 -z-10"/>
          </div>
        </div>
        <div className="diff-item-2">
          <div className="grid place-content-center text-9xl font-black text-primary-content">
            <Image src="/images/floor2/gimmick/prob2_1_img1.png" alt="img1" width="1600" height="900" className="absolute left-0 top-0 -z-10"/>
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
      {/* 回答欄 */}
      <div className="absolute bottom-10 right-10">
        <Prob2_1Answer />
      </div>

    </div>

  )
}

export default Prob2_1