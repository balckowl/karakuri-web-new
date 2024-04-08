import Link from "next/link"
import Arrow from "../aroow/arrow"

const RightArrow = ({hrefProps}: {hrefProps: string}) => {
  return (
    <div className="absolute right-[-20px] top-1/2 translate-x-[1/2] rotate-90">
      <Link href={`${hrefProps}`}>
        <Arrow />
      </Link>
    </div>
  )
}

export default RightArrow