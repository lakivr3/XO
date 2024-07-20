import { View, Text } from "react-native";
import React from "react";
import Tile from "./Tile";
import Reset from "./Reset";
import Strike from "./Strike";

const Board = ({ tiles, onTileClick, playerTurn, strikeClass }) => {
  return (
    <>
      <View className="flex flex-1    justify-center cursor-pointer relative ">
        <View className=" flex-row relative">
          <Tile
            playerTurn={playerTurn}
            onPress={() => onTileClick(0)}
            value={tiles[0]}
            class1="w-[100px] h-[100px] border-[#0074a6] border-b-4 border-r-4  "
          />
          <Tile
            playerTurn={playerTurn}
            onPress={() => onTileClick(1)}
            value={tiles[1]}
            class1="border-[#0074a6] w-[100px] h-[100px] border-b-4"
          />
          <Tile
            playerTurn={playerTurn}
            onPress={() => onTileClick(2)}
            value={tiles[2]}
            class1="border-[#0074a6] w-[100px] h-[100px] border-b-4 border-l-4"
          />
        </View>
        <View className=" flex-row">
          <Tile
            playerTurn={playerTurn}
            onPress={() => onTileClick(3)}
            value={tiles[3]}
            class1="border-[#0074a6] w-[100px] h-[100px] border-r-4"
          />
          <Tile
            playerTurn={playerTurn}
            onPress={() => onTileClick(4)}
            value={tiles[4]}
            class1=" w-[100px] h-[100px] "
          />
          <Tile
            playerTurn={playerTurn}
            onPress={() => onTileClick(5)}
            value={tiles[5]}
            class1="border-[#0074a6] w-[100px] h-[100px] border-l-4"
          />
        </View>
        <View className=" flex-row">
          <Tile
            playerTurn={playerTurn}
            onPress={() => onTileClick(6)}
            value={tiles[6]}
            class1="border-[#0074a6] w-[100px] h-[100px] border-t-4 border-r-4"
          />
          <Tile
            playerTurn={playerTurn}
            onPress={() => onTileClick(7)}
            value={tiles[7]}
            class1="border-[#0074a6] w-[100px] h-[100px] border-t-4"
          />
          <Tile
            playerTurn={playerTurn}
            onPress={() => onTileClick(8)}
            value={tiles[8]}
            class1="border-[#0074a6] w-[100px] h-[100px] border-t-4 border-l-4"
          />
          <View className="absolute">
            <Strike strikeClass={strikeClass} />
          </View>
        </View>
      </View>
    </>
  );
};

export default Board;
