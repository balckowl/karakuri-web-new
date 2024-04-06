"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SendingText from "./sendingText";

const SendingTexts = () => {
  const playerData = {
    currentRoom: "entrance",
    entrance: {
      eventIndex: 0,
    }
  };

  const [textIndex, setTextIndex] = useState<number>(0);
  const [renderTrigger, setRenderTrigger] = useState<number>(0); // レンダリングのトリガー

  // Enter キーが押された時のイベントハンドラ
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      setTextIndex(prevIndex => prevIndex + 1);
    }
  };

  // キーボードイベントのリスナーを設定
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // textIndex が変更されたらレンダリングのトリガーを更新
  useEffect(() => {
    setRenderTrigger(prev => prev + 1);
  }, [textIndex]);

  const eventIndex = playerData.entrance.eventIndex;
  const entranceTexts = {
    0: [
      ["you", "こ、ここは..."],
      ["k-15", "..."],
      ["you", "だ、だれ...?"],
      ["k-15", "私はk-15、あなたの脱出をサポートします"],
      ["you", "よろしく"],
    ],
    1: [
      ["k-15", "先ほど手に入れたアイテムを使うのでしょうか..."],
      ["you", "やってみる"],
    ],
  };

  return (
    <div>
      {/* Entrance */}
      {playerData.currentRoom === "entrance" && eventIndex < 2 && (
        <div>
          <div className="absolute bottom-[30px] left-0 w-full">
            {entranceTexts[eventIndex as keyof typeof entranceTexts][textIndex] &&
              <div className="relative z-[1000] mx-auto h-[200px] w-4/5">
                <SendingText
                  key={renderTrigger} // レンダリングのトリガーとして使用
                  textList={entranceTexts[eventIndex as keyof typeof entranceTexts][textIndex]}
                  textIndex={textIndex}
                />
                {entranceTexts[eventIndex as keyof typeof entranceTexts][textIndex] &&
                  // テキストの背景
                  <motion.div
                    animate={entranceTexts[eventIndex as keyof typeof entranceTexts][textIndex] ?
                      { opacity: [0, 0.8], display: "none" } :
                      { opacity: [0.8, 0], display: "none" }
                    }
                    transition={entranceTexts[eventIndex as keyof typeof entranceTexts][textIndex] ?
                      { duration: 1, delay: 0.5 } :
                      { duration: 0.3 }
                    }
                    className="absolute z-[900] mx-auto size-full rounded-md bg-black outline outline-[10px] outline-gray-500"
                  ></motion.div>
                }
              </div>
            }
          </div>
          { textIndex < entranceTexts[eventIndex as keyof typeof entranceTexts].length &&
            // テキスト送り中に操作を不能にする
            <div className="absolute left-0 top-0 z-[800] size-full bg-black opacity-10"></div>
          }
        </div>
      )}
    </div>
  );
};

export default SendingTexts;
