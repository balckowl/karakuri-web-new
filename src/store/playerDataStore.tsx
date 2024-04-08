import create from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type PlayerData = {
  currentRoom: string;
  [key: string]: any;
  movableRoomList: string[];
  entrance: {
    eventIndex: number;
    event0Finished: boolean;
  };
};

type PlayerDataStoreType = {
  playerData: PlayerData;
  setPlayerData: (data: Partial<PlayerData>) => void; // 部分的なデータを受け入れる
};

const defaultPlayerData: PlayerData = {
  currentRoom: "entrance",
  movableRoomList: ["entrance", "bathroom"],
  entrance: {
    eventIndex: 0,
    event0Finished: false,
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
      name: "happysStorage",
    }
  )
);