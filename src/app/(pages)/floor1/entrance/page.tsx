import UpArrow from "~/app/_components/elements/roomChangeArrow/uparrow.tsx/upArrow"
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow.tsx/leftArrow"
import RightArrow from "~/app/_components/elements/roomChangeArrow/RightArrow/rightArrow"
import SendingTexts from "~/app/_components/elements/sending_text/sendingTexts"
import ProbBase from "~/app/_components/layout/probBase/probBase"

const Entrance = () => {
  return (
    <div>
      {/* <SendingTexts /> */}
      
      <UpArrow hrefProps={"/floor1/bathroom"}  />
      <LeftArrow hrefProps={"/floor1/bathroom"} />
      <RightArrow hrefProps={"/floor1/cafeteria"} />
      <ProbBase />
    </div>
  )
}

export default Entrance    