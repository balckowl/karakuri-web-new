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
    lightToggle: boolean;
  };

  entrance: {
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
  kitchen: {
    eventIndex: number;
    event0Finished: boolean;
  };
  socialroom: {
    eventIndex: number;
    event0Finished: boolean;
  };

  gimmicks: {
    floor1: {
      prob1_1: {
        isFitScrollbar: boolean;
        answer: string;
        isFirstClear: boolean;
        isClear: boolean;
      },
      prob1_2: {
        isClickRock: boolean;
        answer: string;
        isFirstClear: boolean;
        isClear: boolean;
      },
      prob1_3: {
        isLighting: boolean;
        answer: string;
        isFirstClear: boolean;
        isClear: boolean;
      },
    },
  }
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
    lightToggle: false,
  },

  entrance: {
    eventIndex: 0,
    event0Finished: false,
  },
  bathroom: {
    eventIndex: 0,
    event0Finished: true,
  },
  cafeteria: {
    eventIndex: 0,
    event0Finished: true,
  },
  kitchen: {
    eventIndex: 0,
    event0Finished: true,
  },
  socialroom: {
    eventIndex: 0,
    event0Finished: true,
  },

  gimmicks: {
    floor1 : {
      prob1_1: {
        isFitScrollbar: false,
        answer: "",
        isFirstClear: false,
        isClear: false,
      },
      prob1_2: {
        isClickRock: false,
        answer: "",
        isFirstClear: false,
        isClear: false,
      },
      prob1_3: {
        isLighting: false,
        answer: "",
        isFirstClear: false,
        isClear: false,
      },
    },
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
