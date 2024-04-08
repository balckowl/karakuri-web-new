import Arrow from "../aroow/arrow"

const RightArrow = ({ floor, hrefProps }: { floor: number, hrefProps: string }) => {
  return (
    <div className="absolute right-[50px] top-1/2 translate-x-1/2 rotate-90">
      <Arrow floor={floor} hrefProps={hrefProps}/>
    </div>
  )
}

export default RightArrow