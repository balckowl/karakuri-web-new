import Link from "next/link"
import Arrow from "../aroow/arrow"

const UpArrow = ({hrefProps}: {hrefProps: string}) => {
  return (
    <div className="absolute left-1/2 top-0 -translate-x-1/2 ">
      <Link href={`${hrefProps}`}>
        <Arrow />
      </Link>
    </div>
  )
}

export default UpArrow