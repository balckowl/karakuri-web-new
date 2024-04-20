"use client"

import React, { useEffect, useState } from "react"
import EnterTooltip from "~/features/login/components/enterTooltip/enterTooltip"
import CalltoEnter from "~/features/login/components/calltoEnter/calltoEnter"
import IntroAnimation from "~/features/introduction/introAnimation"
import Image from "next/image"

const Login = () => {
  const [isPullString, setIsPullString] = useState<boolean>(false);
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  useEffect(() => {
    if (isPullString) {
      const timeout = setTimeout(() => {
        setIsDisplay(true);
      }, 600);

      return () => clearTimeout(timeout); // Cleanup関数を使ってタイマーをクリア
    }
  }, [isPullString]);

  return (
    <div>
      {isDisplay == false ?
        <IntroAnimation isPullString={isPullString} setIsPullString={setIsPullString}/>
        :
        <div>
          <Image src="/images/login/karakuri-web_login_1.png" alt="main" className="relative left-0 top-0 h-screen w-full object-cover lg:hidden" width="2000" height="2000" />
          <Image src="/images/login/karakuri-web_login_2.png" alt="main" className="relative hidden h-screen w-full object-cover lg:block" width="2000" height="2000" />
          <EnterTooltip/>
          <CalltoEnter/>
        </div>
      }
    </div>
  )
}

export default Login