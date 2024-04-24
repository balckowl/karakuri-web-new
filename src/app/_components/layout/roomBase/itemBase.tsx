"use client"
import Image from "next/image"
import { motion } from "framer-motion";
import Item1_1 from "~/features/item/item1_1";
import Item1_3 from "~/features/item/item1_3";
import Item2_1 from "~/features/item/item2_1";
import { usePlayerDataStore } from "~/store/playerDataStore";
import { Item3_1_1 } from "~/features/item/item3_1_1";
import Item3_1_2 from "~/features/item/item3_1_2";
import Item3_1_3 from "~/features/item/item3_1_3";

const ItemBase = ({ currentRoom }: { currentRoom: string }) => {
  // dbに書き換える 
  const { playerData, setPlayerData } = usePlayerDataStore(); 

  const clickList = () => {
    setPlayerData(
      {
        notFound: {
          ...playerData.notFound,
          isClickList: true,
        }
      }
    )
  }
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
              <div className="absolute left-1/2 top-3/4 -translate-x-1/2">
                <Image src="/images/floor2/gimmick/prob2_1_hint.png" alt="hint" width="300" height="300"/>
              </div>
            </motion.div>
          </div>

          <Image src="/images/floor2/room/plum.webp" alt="pine" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>
        : currentRoom === "openairbath" ?
        <div>
          <div>
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
            >
              <div className="h-full p-6">
                <Item3_1_1 />
              </div>
            </motion.div>
          </div>

          <Image src="/images/floor3/room/openairbath.webp" alt="openairbath" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>
        : currentRoom === "dragon1" ?
        <div>
          <div>
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
            >
              <div className="h-full p-6">
                <Item3_1_2 />
              </div>
            </motion.div>
          </div>

          <Image src="/images/floor3/room/dragon1.webp" alt="dragon1" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>
        : currentRoom === "notFound" &&
        <div>
          <div>
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute left-1/2 top-1/2 size-4/5 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white shadow-lg"
            >
              <div
                onClick={clickList}
                className="absolute h-full cursor-pointer p-6"
              >
                <ul>
                  <li>???</li>
                  <li>/floor0/elevator</li>
                  <li>/floor1/entrance</li>
                  <li>/floor1/bathroom</li>
                  <li>/floor1/cafeteria</li>
                  <li>/floor1/kitchen</li>
                  <li>/floor1/socialroom</li>
                  <li>/floor1/storeroom</li>
                  <li>/floor2/corridor</li>
                  <li>/floor2/plum</li>
                  <li>/floor2/bamboo</li>
                  <li>/floor2/pine</li>
                  <li>/floor3/restroom</li>
                  <li>/floor3/openairbath</li>
                  <li>/floor3/dragon1</li>
                  <li>/floor3/dragon2</li>
                  <li>/floor3/office</li>
                  <li>/floor3/縺溘∪縺</li>
                </ul>
              </div>
              
              <div className="h-full p-6">
                <Item3_1_3 />
              </div>
            </motion.div>

          </div>

          <Image src="/images/other/notFound.webp" alt="notFound" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>

      }

    </div>
  )
}

export default ItemBase