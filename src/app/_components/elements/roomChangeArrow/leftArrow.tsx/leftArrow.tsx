import Link from "next/link"
import Arrow from "../aroow/arrow"

const LeftArrow = ({hrefProps}: {hrefProps: string}) => {
  return (
    <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 -rotate-90">
      <Link href={`${hrefProps}`}>
        <Arrow />
      </Link>
    </div>
  )
}

export default LeftArrow