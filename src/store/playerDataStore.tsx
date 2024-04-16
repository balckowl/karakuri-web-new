import create from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type PlayerData = {
  currentRoom: string;
  movableRoomList: string[];
  belonging: string;
  belongingList: string[];
  // 進捗(マップの更新)
  progress: number;
  // アイテムの取得判定
  isGetItems: {
    scrollBar: boolean;
    woodenBoard: boolean;
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
    eventIndex: number;
    event0Finished: boolean;
    answer: string;
    isFirstClear: boolean;
    isClear: boolean;
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
    isClickRock: boolean;
    eventIndex: number;
    event0Finished: boolean;
    answer: string;
    isFirstClear: boolean;
    isClear: boolean;
  };
  // prob1_3
  socialroom: {
    isLighting: boolean;
    eventIndex: number;
    event0Finished: boolean;
    answer: string;
    isFirstClear: boolean;
    isClear: boolean;
  };
  storeroom: {
    eventIndex: number;
    event0Finished: boolean;
  };

  // floor2
  corridor: {
    isTryMove: boolean;
    movableBamboo: boolean;
    eventIndex: number;
    event0Finished: boolean;
  };
  pine: {
    eventIndex: number;
    event0Finished: boolean;
  };
  bamboo: {
    eventIndex: number;
    event0Finished: boolean;
  };
  plum: {
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
  // "elevator", "corridor", "pine", "bamboo"],
  belonging: "",
  belongingList: [],
  progress: 0,
  isGetItems: {
    scrollBar: false,
    woodenBoard: false,
  },
  // floor0
  elevator: {
    eventIndex: 0,
    event0Finished: false,
  },

  // floor1
  // prob1_1
  entrance: {
    isFitScrollbar: false,
    eventIndex: 0,
    event0Finished: false,
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
    isClickRock: false,
    eventIndex: 0,
    event0Finished: true,
    answer: "",
    isFirstClear: false,
    isClear: false,
  },
  // prob1_3
  socialroom: {
    isLighting: false,
    eventIndex: 0,
    event0Finished: false,
    answer: "",
    isFirstClear: false,
    isClear: false,
  },
  storeroom: {
    eventIndex: 0,
    event0Finished: true,
  },
  // floor2
  corridor: {
    isTryMove: false,
    movableBamboo: false,
    eventIndex: 0,
    event0Finished: true,
  },
  pine: {
    eventIndex: 0,
    event0Finished: true,
  },
  bamboo: {
    eventIndex: 0,
    event0Finished: true,
  },
  plum: {
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
