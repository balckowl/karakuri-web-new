"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EcoSendingText from "~/features/sendingText/ecoSendingText";
import { usePlayerDataStore } from "~/store/playerDataStore";
import Image from "next/image";
import ExitTooltip from "~/features/eco/exitTooptip";
import CalltoExit from "~/features/eco/calltoExit";

const EcoComponent = () => {
  const { setPlayerData } = usePlayerDataStore();
  const [exitClicked, setExitClicked] = useState(false);

  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "eco" });
  }, [setPlayerData]);

  return (
    <div>
      <EcoSendingText />
      <AnimatePresence>
        {exitClicked && (
          <motion.div
            animate={{ opacity: [0, 0.9] }}
            transition={{ duration: 0.5 }}
            className="fixed left-0 top-0 z-[10000] size-full bg-black text-white"
            >
            <motion.div 
              animate={{ opacity: [0, 0.9] }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mx-auto flex size-full w-max flex-col items-start justify-center gap-10"
            >
              <div className="text-[50px]">karakuri-web</div>
              <div>
                <p className="mb-2 text-xl font-bold">製作 : からくリンゴ</p>
                <p>・くしらっちょ</p>
                <p>・牛丼</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ExitTooltip setExitClicked={setExitClicked}/>
      <CalltoExit />

      <Image
        src="/images/floor3/room/eco.webp"
        alt="eco"
        width="2000"
        height="2000"
        className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"
      />
    </div>
  );
};

export default EcoComponent;
