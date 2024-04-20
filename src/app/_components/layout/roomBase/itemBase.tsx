"use client"
import Image from "next/image"
import { motion } from "framer-motion";
import Item1_1 from "~/features/floor1/item/item1_1";
import Item1_3 from "~/features/floor1/item/item1_3";
import Item2_1 from "~/features/floor1/item/item2_1";

const ItemBase = ({ currentRoom }: { currentRoom: string }) => {
  // dbに書き換える 
  // const { playerData } = usePlayerDataStore(); 

  return (
    <div>
      {currentRoom === "bathroom" ?
        <div>
          <div>
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
            >
              <div className="h-full p-6">
                <Item1_1 />
              </div>
            </motion.div>
          </div>

          <Image src="/images/floor1/room/bathroom.webp" alt="bathroom" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>
        : currentRoom === "storeroom" ?
        <div>
          <div>
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
            >
              <div className="h-full p-6">
                <Item1_3 />
              </div>
            </motion.div>
          </div>

          <Image src="/images/floor1/room/bathroom.webp" alt="bathroom" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>
        : currentRoom === "plum" ?
        <div>
          <div>
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
            >
              <div className="h-full p-6">
                <Item2_1 />
              </div>
            </motion.div>
          </div>

          <Image src="/images/floor2/room/plum.webp" alt="pine" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>
        :
        <div></div>
      }
    </div>
  )
}

export default ItemBase