import Arrow from "../arrow/arrow"

const DownArrow = ({ floor, hrefProps }: { floor: number, hrefProps: string }) => {
  return (
    <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 rotate-180">
      <Arrow floor={floor} hrefProps={hrefProps}/>
    </div>
  )
}

export default DownArrow