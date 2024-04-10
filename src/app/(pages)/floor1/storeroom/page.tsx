import React from "react"
import RightArrow from "~/app/_components/elements/roomChangeArrow/rightArrow/rightArrow"
import ItemBase from "~/app/_components/layout/roomBase/itemBase"

const Storeroom  = () => {
  return (
    <div>
      <RightArrow floor={1} hrefProps={"socialroom"} />
      <ItemBase currentRoom={"storeroom"}/>
    </div>
  )
}

export default Storeroom 