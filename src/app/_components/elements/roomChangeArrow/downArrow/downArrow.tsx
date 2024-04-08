import Link from "next/link"
import Arrow from "../aroow/arrow"

const DownArrow = ({hrefProps}: {hrefProps: string}) => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-180">
      <Link href={`${hrefProps}`}>
        <Arrow />
      </Link>
    </div>
  )
}

export default DownArrow