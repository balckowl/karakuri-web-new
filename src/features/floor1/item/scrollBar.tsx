import { usePlayerDataStore } from "~/store/playerDataStore";


const ScrollBar = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  const preBelongings: string[] = playerData.belongingList 

  const getScrollBar = () => {
    console.log("a")
    // アイテムを取った判定、持ち物の追加
    setPlayerData({isGetItems: {scrollBar: true}, belongingList: [...preBelongings,"scrollBar"]})
  }

  return (
    <div onClick={getScrollBar} className="cursor-pointer">
      {playerData.isGetItems.scrollBar == false && <div>ScrollBar</div>}
    </div>
  )
}

export default ScrollBar