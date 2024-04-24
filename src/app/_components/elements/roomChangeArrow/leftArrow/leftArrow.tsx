import Arrow from "../arrow/arrow"

const LeftArrow = ({ floor, hrefProps }: { floor: number, hrefProps: string }) => {
  return (
    <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 -rotate-90">
      <Arrow floor={floor} hrefProps={hrefProps}/>
    </div>
  )
}

export default LeftArrow