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
    stone: boolean;
    branchAndRope: boolean;
  };
  // outside
  login: {
    eventIndex: number;
    event0Finished: boolean;
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
    isFirstClear: boolean;
    isClear: boolean;
  };
  // prob1_3
  socialroom: {
    isLighting: boolean;
    eventIndex: number;
    event0Finished: boolean;
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
  plum: {
    eventIndex: number;
    event0Finished: boolean;
  };
  bamboo: {
    eventIndex: number;
    event0Finished: boolean;
    isFirstClear: boolean;
    isClear: boolean;
  };
  pine: {
    eventIndex: number;
    event0Finished: boolean;
    target: number;
    isFirstClear: boolean;
    isClear: boolean;
  };

  // floor3
  restroom: {
    eventIndex: number;
    event0Finished: boolean;
  };
  dragon1: {
    eventIndex: number;
    event0Finished: boolean;
  };
  dragon2: {
    eventIndex: number;
    event0Finished: boolean;
  };
  openairbath: {
    eventIndex: number;
    event0Finished: boolean;
  };
  office: {
    eventIndex: number;
    event0Finished: boolean;
  };

  // NotFound
  notFound: {
    isClickList: boolean;
    eventIndex: number;
    event0Finished: boolean;
  }

  [key: string]: any
};

type PlayerDataStoreType = {
  playerData: PlayerData;
  setPlayerData: (data: Partial<PlayerData>) => void; // 部分的なデータを受け入れる
};

const defaultPlayerData: PlayerData = {
  // 今いる部屋
  currentRoom: "login", 
  // いける部屋
  movableRoomList: ["entrance", "bathroom"],
  // "elevator", "corridor", "pine", "bamboo"],
  // "restroom", "openairbath", "dragon1", "dragon2", "office"],
  // 今手に持っているもの
  belonging: "",
  // 持ち物リスト
  belongingList: [],
  progress: 0,
  // すでにそのアイテムを取ったか
  isGetItems: {
    scrollBar: false,
    woodenBoard: false,
    stone: false,
    branchAndRope: false,
  },
  // outside
  login: {
    eventIndex: 0,
    event0Finished: false,
  },

  // 全部屋共通
  // eventIndex: イベント管理
  // event0Finished: イベント0が終わったかどうか
  
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
    // 初クリア判定(クリアアラートを出すフラグ)
    isFirstClear: false,
    // クリア判定
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
    isFirstClear: false,
    isClear: false,
  },
  // prob1_3
  socialroom: {
    isLighting: false,
    eventIndex: 0,
    event0Finished: false,
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
  plum: {
    eventIndex: 0,
    event0Finished: true,
  },
  bamboo: {
    eventIndex: 0,
    event0Finished: true,
    isFirstClear: false,
    isClear: false,
  },
  pine: {
    eventIndex: 0,
    event0Finished: true,
    target : 0,
    isFirstClear: false,
    isClear: false,
  },

  // floor3
  restroom: {
    eventIndex: 0,
    event0Finished: true,
  },
  dragon1: {
    eventIndex: 0,
    event0Finished: true,
  },
  dragon2: {
    eventIndex: 0,
    event0Finished: true,
  },
  openairbath: {
    eventIndex: 0,
    event0Finished: true,
  },
  office: {
    eventIndex: 0,
    event0Finished: true,
  },

  // NotFound
  notFound: {
    isClickList: false,
    eventIndex: 0,
    event0Finished: true,
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
