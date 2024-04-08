import UpArrow from "~/app/_components/elements/roomChangeArrow/uparrow.tsx/upArrow"
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow.tsx/leftArrow"
import RightArrow from "~/app/_components/elements/roomChangeArrow/RightArrow/rightArrow"
import SendingTexts from "~/app/_components/elements/sending_text/sendingTexts"
import ProbBase from "~/app/_components/layout/roomBase/probBase"

const Entrance = () => {
  return (
    <div>
      <SendingTexts />

      <UpArrow floor={1} hrefProps={"socialroom"}  />
      <LeftArrow floor={1} hrefProps={"bathroom"} />
      <RightArrow floor={1} hrefProps={"cafeteria"} />

      <ProbBase currentRoom={"entrance"}/>
    </div>
  )
}

export default Entrance    