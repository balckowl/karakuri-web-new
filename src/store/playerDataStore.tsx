import create from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type PlayerData = {
  currentRoom: string;
  movableRoomList: string[];
  belonging: string;
  belongingList: string[];
  isGetItems: {
    scrollBar: boolean;
  };
  entrance: {
    eventIndex: number;
    event0Finished: boolean;
  };
  bathroom: {
    event0Finished: boolean;
  };
  cafeteria: {
    event0Finished: boolean;
  };
  kitchen: {
    eventIndex: number;
    event0Finished: boolean;
  };
  gimmicks: {
    prob1_1: {
      isFitScrollbar: boolean;
      answer: string;
      isFirstClear: boolean;
    },
    prob1_2: {
      isClickRock: boolean;
      answer: string;
      isFirstClear: boolean;
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
  isGetItems: {
    scrollBar: false,
  },
  entrance: {
    eventIndex: 0,
    event0Finished: false,
  },
  bathroom: {
    event0Finished: true,
  },
  cafeteria: {
    event0Finished: true,
  },
  kitchen: {
    eventIndex: 0,
    event0Finished: true,
  },
  gimmicks: {
    prob1_1: {
      isFitScrollbar: false,
      answer: "",
      isFirstClear: false,
    },
    prob1_2: {
      isClickRock: false,
      answer: "",
      isFirstClear: false,
    },
  }
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
