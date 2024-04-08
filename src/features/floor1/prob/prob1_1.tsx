import Image from "next/image"

const Prob1_1 = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10">
      <div className="mx-auto flex max-w-[490px] flex-col">
        <div className="flex h-[150px] items-end outline outline-2 outline-black">
          <Image
            src="/images/floor1/prob/prob1_1/HELLO_up.png"
            alt="HELLO-up"
            width={980}
            height={105}
            className="h-[52px]"
          />
        </div>
        <div className="h-[120px] outline outline-2 outline-black">
          <Image
            src="/images/floor1/prob/prob1_1/HELLO_down.png"
            alt="HELLO-down"
            width={980}
            height={70}
            className="h-[35px]"
          />
        </div>
        {/* スクロールバーをはめ込むところ */}
        <div className="h-[30px] translate-y-[2px] outline outline-2 outline-black">
        </div>
      </div>
      <Image
        src="/images/floor1/prob/prob1_1/left_arrow.png"
        alt="left_arrow"
        width={100}
        height={100}
        className="size-[100px]"
      />
    </div>
  )
}

export default Prob1_1