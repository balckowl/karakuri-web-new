import RightArrow from "~/app/_components/elements/roomChangeArrow/RightArrow/rightArrow"
import ItemBase from "~/app/_components/layout/roomBase/itemBase"


const Bathroom = () => {
  return (
    <div>
      {/* <SendingTexts /> */}

      <RightArrow floor={1} hrefProps={"entrance"} />

      <ItemBase currentRoom={"bathroom"}/>
    </div>
  )
}

export default Bathroom