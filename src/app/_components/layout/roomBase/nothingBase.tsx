import Image from "next/image"

const NothingBase = ({ currentRoom }: { currentRoom: string }) => {
  return (
    <div>
      {currentRoom === "cafeteria" ?
        <div>
          <Image src="/images/floor1/room/cafeteria.webp" alt="cafeteria" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>
        : currentRoom === "corridor" ?
        <div>
          <Image src="/images/floor2/room/corridor.webp" alt="corridor" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>
        : currentRoom === "restroom" &&
        <div>
          <Image src="/images/floor3/room/restroom.webp" alt="restroom" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover"/>
        </div>
      }
    </div>

  )
}

export default NothingBase