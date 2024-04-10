"use client"
import React, { useEffect } from 'react'
import Belongings from '~/app/_components/elements/belongings/belongings';
import ProbClearAlert from '~/app/_components/elements/probClearAlert/probClearAlert';
import DownArrow from '~/app/_components/elements/roomChangeArrow/downArrow/downArrow';
import LeftArrow from '~/app/_components/elements/roomChangeArrow/leftArrow.tsx/leftArrow';
import ProbBase from '~/app/_components/layout/roomBase/probBase';
import SocialSendingText from '~/features/floor1/sendingText/socalroomSendingText';
import { usePlayerDataStore } from '~/store/playerDataStore';

const Socialroom = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData(
      {
        currentRoom: "kitchen",
        gimmicks: {
          floor1: {
            prob1_1: {
              ...playerData.gimmicks.floor1.prob1_1,
            },
            prob1_2: {
              ...playerData.gimmicks.floor1.prob1_2,
              isFirstClear: false,
            },
            prob1_3: {
              ...playerData.gimmicks.floor1.prob1_3,
            }
          }
        }
      }
    )
  }, [setPlayerData])

  return (
    <div>
      {playerData.gimmicks.floor1.prob1_2.isClickRock &&
        <div>
          <SocialSendingText />
        </div>
      }
  
      <DownArrow floor={1} hrefProps={"entrance"} />
      <LeftArrow floor={1} hrefProps={"storeroom"} />
  
      <ProbBase currentRoom={"socialroom"} />
  
      <Belongings />
      {playerData.gimmicks.floor1.prob1_3.isFirstClear &&
        <ProbClearAlert />
      }
    </div>
  )
}

export default Socialroom