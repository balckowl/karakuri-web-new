import create from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type PlayerData = {
  currentRoom: string;
  movableRoomList: string[];
  belonging: string;
  belongingList: string[];
  progress: number;
  isGetItems: {
    scrollBar: boolean;
  };
  // floor0
  elevator: {
    eventIndex: number;
    event0Finished: boolean;
  };

  // floor1
  // prob1_1
  entrance: {
    isFitScrollbar: boolean;
    answer: string;
    isFirstClear: boolean;
    isClear: boolean;
    eventIndex: number;
    event0Finished: boolean;
  };
  bathroom: {
    eventIndex: number;
    event0Finished: boolean;
  };
  cafeteria: {
    eventIndex: number;
    event0Finished: boolean;
  };
  // prob1_2
  kitchen: {
    eventIndex: number;
    event0Finished: boolean;
    isClickRock: boolean;
    answer: string;
    isFirstClear: boolean;
    isClear: boolean;
  };
  // prob1_3
  socialroom: {
    eventIndex: number;
    event0Finished: boolean;
    isLighting: boolean;
    answer: string;
    isFirstClear: boolean;
    isClear: boolean;
  };
  storeroom: {
    eventIndex: number;
    event0Finished: boolean;
  };
  [key: string]: any
};

type PlayerDataStoreType = {
  playerData: PlayerData;
  setPlayerData: (data: Partial<PlayerData>) => void; // 部分的なデータを受け入れる
};

const defaultPlayerData: PlayerData = {
  currentRoom: "entrance",
  movableRoomList: ["entrance", "bathroom"],
  belonging: "",
  belongingList: [],
  progress: 0,
  isGetItems: {
    scrollBar: false,
  },
  // floor0
  elevator: {
    eventIndex: 0,
    event0Finished: false,
  },
  // floor1
  // prob1_1
  entrance: {
    eventIndex: 0,
    event0Finished: false,
    isFitScrollbar: false,
    answer: "",
    isFirstClear: false,
    isClear: false,
  },
  bathroom: {
    eventIndex: 0,
    event0Finished: true,
  },
  cafeteria: {
    eventIndex: 0,
    event0Finished: true,
  },
  // prob1_2
  kitchen: {
    eventIndex: 0,
    event0Finished: true,
    isClickRock: false,
    answer: "",
    isFirstClear: false,
    isClear: false,
  },
  // prob1_3
  socialroom: {
    eventIndex: 0,
    event0Finished: false,
    isLighting: false,
    answer: "",
    isFirstClear: false,
    isClear: false,
  },
  storeroom: {
    eventIndex: 0,
    event0Finished: true,
  },
};

export const usePlayerDataStore = create<PlayerDataStoreType>()(
  persist(
    immer((set) => ({
      playerData: defaultPlayerData,
      setPlayerData: (data) => { // 引数を受け入れる
        set((state) => ({
          playerData: {
            ...state.playerData,
            ...data, // 与えられたデータで既存のデータをマージ
          },
        }));
      },
    })),
    {
      name: "PlayersStorage",
    }
  )
);
