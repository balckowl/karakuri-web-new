import Image from "next/image"
import { motion } from "framer-motion"

const NothingBase = ({ currentRoom }: { currentRoom: string }) => {
  return (
    <div>
      {currentRoom === "cafeteria" ?
        <div>
          <Image src="/images/floor1/rooms/cafeteria.webp" alt="cafeteria" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover" width="2000" height="2000" />
        </div>
        :
        <div></div>
      }
    </div>

  )
}

export default NothingBase