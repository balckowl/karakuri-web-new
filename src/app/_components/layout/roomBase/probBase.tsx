"use client"
import Image from "next/image"
import Prob1_1 from "~/features/floor1/prob/prob1_1";
import { motion } from "framer-motion";
import { usePlayerDataStore } from "~/store/playerDataStore";
import Prob1_2 from "~/features/floor1/prob/prob1_2";

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
                <div className="h-full p-6">
                  <Prob1_1 />
                </div>
              </motion.div>
            </div>
          }
          <Image src="/images/floor1/rooms/entrance.webp" alt="entrance" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover" width="2000" height="2000" />
        </div>
        : currentRoom === "kitchen" ?
        <div>
          {playerData.kitchen.event0Finished &&
            <div>
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
              >
                <div className="h-full p-6">
                  <Prob1_2 />
                </div>
              </motion.div>
            </div>
          }
          <Image src="/images/floor1/rooms/kitchen.webp" alt="kitchen" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover" width="2000" height="2000" />

        </div>
        :
        <div></div>
      }
    </div>
  )
}

export default ProbBase