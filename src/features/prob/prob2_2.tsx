"use client"
import { type FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Prob2_2Answer from "~/features/answerColumn/prob2_2Answer";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Prob2_2 = () => {
  const maxQuestionCount = 12;
  const maxValue = 500;
  const { playerData, setPlayerData } = usePlayerDataStore();
  const [logList, setLogList] = useState<[string, boolean][]>([]);
  const [lower, setLower] = useState<number>(1);
  const [upper, setUpper] = useState<number>(maxValue);
  const [target, setTarget] = useState<number>(-1);
  const [questionCount, setQuestionCount] = useState<number>(0);

  const desideTarget = () => {
    const tmp = Math.floor(Math.random() * maxValue) + 1
    setTarget(tmp);
    setPlayerData({
      pine: {
        ...playerData.pine,
        target: tmp
      }
    });
  }

  useEffect(() => {
    desideTarget()
  }, [])

  const askQuestion = (e: FormEvent) => {
    e.preventDefault();
    setQuestionCount(prev => prev + 1);
    if (lower <= target && target <= upper) {
      setLogList([...logList, [`${lower} ~ ${upper}`, true]]);
    } else {
      setLogList([...logList, [`${lower} ~ ${upper}`, false]]);
    }
    if (questionCount === maxQuestionCount) {
      desideTarget();
      setLogList([]);
      setQuestionCount(0);
    }
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex size-3/5 flex-col items-center justify-center gap-4 rounded-md outline outline-2">
        <p>残り{maxQuestionCount - questionCount}回</p>
        <div className="size-3/5 overflow-y-scroll outline outline-2">
          {logList.slice().reverse().map((log, index) => (
            <div key={index} className="flex w-full justify-between border-b-DEFAULT border-black bg-orange-200 p-4">
              <div className="text-xl">
                <p>{log[0]}</p>
              </div>
              {log[1] ?
                <Image src="/images/floor2/gimmick/prob2_2_O.png" alt="img2" width="30" height="30" />
                :
                <Image src="/images/floor2/gimmick/prob2_2_X.png" alt="img2" width="30" height="30" />
              }
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => askQuestion(e)}
          className="flex h-max w-[70%] items-center justify-between gap-10"
        >
          <div className="flex gap-4">
            <input type="number"
              min={1} max={upper}
              placeholder="1"
              onChange={(e) => setLower(Number(e.target.value))}
              className="input input-bordered input-info h-[50px] w-[80px] max-w-xs"
              disabled={questionCount >= maxQuestionCount || playerData.pine.isClear}
            />
            <p className="text-4xl">~</p>
            <input type="number"
              min={lower} max={maxValue}
              placeholder={`${maxValue}`}
              onChange={(e) => setUpper(Number(e.target.value))}
              className="input input-bordered input-secondary h-[50px] w-[80px] max-w-xs"
              disabled={questionCount >= maxQuestionCount || playerData.pine.isClear}
            />
          </div>
          <button className="btn btn-outline">
            {questionCount >= maxQuestionCount ? "リセット" : "決定"}
          </button>
        </form>
      </div>

      {/* 問題の説明 */}
      <div className="absolute bottom-10 left-10">
        <button className="btn" onClick={() => {
          const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
          if (modal) {
            modal.showModal();
          }
        }}>?</button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">答えは1以上500以下の整数</h3>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      {/* 回答欄 */}
      <div className="absolute bottom-10 right-10">
        <Prob2_2Answer setTarget={setTarget} setLogList={setLogList} setQuestionCount={setQuestionCount} />
      </div>
    </div>
  );
};

export default Prob2_2;
