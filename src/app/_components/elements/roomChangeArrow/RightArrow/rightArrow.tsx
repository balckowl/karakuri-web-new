import Arrow from "../arrow/arrow"

const RightArrow = ({ floor, hrefProps }: { floor: number, hrefProps: string }) => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90">
      <Arrow floor={floor} hrefProps={hrefProps}/>
    </div>
  )
}

export default RightArrow