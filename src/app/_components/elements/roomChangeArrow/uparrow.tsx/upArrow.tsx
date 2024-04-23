import Arrow from "../arrow/arrow"

const UpArrow = ({ floor, hrefProps }: { floor: number, hrefProps: string }) => {
  return (
    <div className="absolute left-1/2 top-0 -translate-x-1/2 ">
      <Arrow floor={floor} hrefProps={hrefProps}/>
    </div>
  )
}

export default UpArrow