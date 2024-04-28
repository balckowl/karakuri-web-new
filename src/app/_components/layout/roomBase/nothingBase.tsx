"use client"
import Image from "next/image"
import { motion } from "framer-motion";

const NothingBase = ({ currentRoom }: { currentRoom: string }) => {
  return (
    <div>
      {currentRoom === "cafeteria" ?
          <div>
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
            >
              <div className="h-full p-6">
                <div className="absolute text-xl font-bold">/floor1/cafeteria</div>
              </div>
            </motion.div>
            <Image src="/images/floor1/room/cafeteria.webp" alt="cafeteria" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover" />
          </div>
        : currentRoom === "corridor" ?
          <div>
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
            >
              <div className="h-full p-6">
                <div className="absolute text-xl font-bold">/floor2/corridor</div>
              </div>
            </motion.div>
            <Image src="/images/floor2/room/corridor.webp" alt="corridor" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover" />
          </div>
        : currentRoom === "restroom" &&
          <div>
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
            >
              <div className="h-full p-6">
                <div className="absolute text-xl font-bold">/floor3/restroom</div>
              </div>
            </motion.div>
            <Image src="/images/floor3/room/restroom.webp" alt="restroom" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover" />
          </div>
      }
    </div>

  )
}

export default NothingBase