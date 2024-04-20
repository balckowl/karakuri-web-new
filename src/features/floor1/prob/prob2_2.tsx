"use client"
import { FormEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Prob2_2Answer from '~/features/answerColumn/prob2_2Answer';
import { usePlayerDataStore } from '~/store/playerDataStore';

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

  useEffect(()=> {
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
      <div className="outline outline-2 w-[60%] h-[60%] rounded-md flex justify-center flex-col items-center gap-4">
        <p>残り{maxQuestionCount - questionCount}回</p>
        <div className="outline outline-2 w-[60%] h-[60%] overflow-y-scroll">
          {logList.slice().reverse().map((log, index) => (
            <div key={index} className="flex w-full justify-between p-4 border-b-[1px] border-black bg-orange-200">
              <div className="text-xl">
                <p>{log[0]}</p>
              </div>
              {log[1] ?
                <Image src="/images/floor2/gimmick/prob2_2_O.png" alt="img2" width="30" height="30" className="object-fit" />
                :
                <Image src="/images/floor2/gimmick/prob2_2_X.png" alt="img2" width="30" height="30" className="object-fit" />
              }
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => askQuestion(e)}
          className="flex items-center h-max gap-10 w-[70%] justify-between"
        >
          <div className="flex gap-4">
            <input type="number"
              min={1} max={upper}
              placeholder="1"
              onChange={(e) => setLower(Number(e.target.value))}
              className="input input-bordered input-info w-[80px] h-[50px] max-w-xs"
              disabled={questionCount >= maxQuestionCount || playerData.pine.isClear}
            />
            <p className="text-4xl">~</p>
            <input type="number"
              min={lower} max={maxValue}
              placeholder={`${maxValue}`}
              onChange={(e) => setUpper(Number(e.target.value))}
              className="input input-bordered input-secondary w-[80px] h-[50px] max-w-xs"
              disabled={questionCount >= maxQuestionCount || playerData.pine.isClear}
            />
          </div>
          <button className="btn btn-outline">
            {questionCount >= maxQuestionCount ? "リセット" : "決定"}
          </button>
        </form>
      </div>
      {/* 回答欄 */}
      <div className="absolute bottom-10 right-10">
        <Prob2_2Answer setTarget={setTarget} setLogList={setLogList} setQuestionCount={setQuestionCount}/>
      </div>
    </div>
  );
};

export default Prob2_2;
