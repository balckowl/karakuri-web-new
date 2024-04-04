"use client"
import { motion } from "framer-motion"
import Image from "next/image";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react"

const IntroAnimation = ({ isPullString, setIsPullString }: { isPullString: boolean, setIsPullString: Dispatch<SetStateAction<boolean>> }) => {

  const [clipPathRadius, setClipPathRadius] = useState(0); // clipPathの半径を状態として管理

  // isPullStringがtrueになったとき、clipPathRadiusを徐々に大きくする
  useEffect(() => {
    if (isPullString) {
      const interval = setInterval(() => {
        setClipPathRadius(prevRadius => prevRadius + 4);
      }, 10); // 10msごとに増加
      return () => clearInterval(interval);
    }
  }, [isPullString]);

  return (
    <div className="absolute left-0 top-0 size-full overflow-hidden bg-black">

      {/* 円から広がるアニメーション */}
      {isPullString &&
        <div className="absolute size-full">
          <div className="relative z-[100]">
            <div style={{ clipPath: `circle(${clipPathRadius}% at 90% 0%)` }}>
              <Image src="/images/login/karakuri-web_login_1.png" alt="main" className="relative left-0 top-0 h-screen w-full object-cover lg:hidden" width="2000" height="2000" />
              <Image src="/images/login/karakuri-web_login_2.png" alt="main" className="relative hidden h-screen w-full object-cover lg:block" width="2000" height="2000" />
            </div>
          </div>
        </div>
      }

      <div className="flex size-full items-center justify-center">
        {/* text */}
        <motion.p
          animate={{ letterSpacing: [0, "20px"] }}
          transition={{ duration: 1, delay: 0.3 }}
          className="translate-y-[-20px] text-xl tracking-normal text-white"
        >
          からくり館へ、ようこそ
        </motion.p>
      </div>
      {/* string */}
      <motion.div
        animate={isPullString ? { y: [-100, -80, -200] } : { y: [-200, -100] }}
        transition={isPullString ? { duration: 0.4, times: [0, 0.3, 1] } : { duration: 1, delay: 1, type: 'spring' }}
        onClick={() => setIsPullString(true)}
        className="absolute right-12 top-0 h-[200px] w-[20px] translate-y-[-100px] cursor-pointer bg-gray-600"
      >
      </motion.div>

    </div>
  )
}

export default IntroAnimation