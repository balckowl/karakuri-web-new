"use client"
import Image from "next/image"
import Prob1_1 from "~/features/floor1/prob1_1";
import { motion } from "framer-motion";
import { usePlayerDataStore } from "~/store/playerDataStore";

const ProbBase = ({currentRoom}: {currentRoom: string}) => {
  // dbに書き換える 
  const { playerData } = usePlayerDataStore(); 

  return (
    <div>
      {currentRoom === "entrance" ?
        <div>
          {playerData.entrance.event0Finished &&
            <div>
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
              >
                <div className="p-6">
                  <Prob1_1 />
                </div>
              </motion.div>
            </div>
          }
          <Image src="/images/rooms/entrance.webp" alt="main" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover" width="2000" height="2000" />
        </div>
        :
        <div></div>
      }
    </div>
  )
}

export default ProbBase