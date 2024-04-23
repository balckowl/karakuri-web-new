"use client"
import Image from "next/image"
import Prob1_1 from "~/features/prob/prob1_1";
import { motion } from "framer-motion";
import { usePlayerDataStore } from "~/store/playerDataStore";
import Prob1_2 from "~/features/prob/prob1_2";
import Prob1_3 from "~/features/prob/prob1_3";
import Prob2_1 from "~/features/prob/prob2_1";
import Prob2_2 from "~/features/prob/prob2_2";
import Prob3_1 from "~/features/prob/prob3_1";

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
          <Image src="/images/floor1/room/entrance.webp" alt="entrance" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
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
          <Image src="/images/floor1/room/kitchen.webp" alt="kitchen" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>
        : currentRoom === "socialroom" ?
        <div>
          {playerData.socialroom.event0Finished &&
            <div>
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
              >
                <div className="h-full p-6">
                  <Prob1_3 />
                </div>
              </motion.div>
            </div>
          }
          <Image src="/images/floor1/room/kitchen.webp" alt="socailroom" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>
        : currentRoom === "bamboo" ?
        <div>
          {playerData.socialroom.event0Finished &&
            <div>
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
              >
                <div className="h-full p-6">
                  <Prob2_1 />
                </div>
              </motion.div>
            </div>
          }
          <Image src="/images/floor2/room/bamboo.webp" alt="bamboo" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>
        : currentRoom === "pine" ?
        <div>
          {playerData.pine.event0Finished &&
            <div>
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
              >
                <div className="h-full p-6">
                  <Prob2_2 />
                </div>
              </motion.div>
            </div>
          }
          <Image src="/images/floor2/room/pine.webp" alt="socailroom" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>
        : currentRoom === "dragon2" ?
        <div>
          {playerData.dragon2.event0Finished &&
            <div>
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
              >
                <div className="h-full p-6">
                  <Prob3_1 />
                </div>
              </motion.div>
            </div>
          }
          <Image src="/images/floor3/room/dragon2.webp" alt="dragon" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>
        : currentRoom === "office" &&
        <div>
          {playerData.office.event0Finished &&
            <div>
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
              >
                <div className="h-full p-6">

                </div>
              </motion.div>
            </div>
          }
          <Image src="/images/floor3/room/office.webp" alt="office" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>
      }
    </div>
  )
}

export default ProbBase