import React from "react";
import { Text, View } from "react-native";
import { GameState } from "./GameData";

const GameOver = ({ gameState }) => {
  switch (gameState) {
    case GameState.inProgres:
      return <></>;
    case GameState.playerOWins:
      return (
        <View className="top-10">
          <Text className="font-raleway text-4xl font-bold text-white">
            O Wins
          </Text>
        </View>
      );
    case GameState.playerXWins:
      return (
        <View className="top-10">
          <Text className="font-raleway text-4xl font-bold text-white">
            X Wins
          </Text>
        </View>
      );
    case GameState.draw:
      return (
        <View className="">
          <Text className="font-raleway text-4xl font-bold text-white">
            Draw
          </Text>
        </View>
      );

    default:
      return;
  }
};

export default GameOver;
