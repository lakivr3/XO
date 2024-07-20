import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { GameState } from "./GameData";

const Reset = ({ handleReset, gameState }) => {
  if (gameState === GameState.inProgres) {
    return;
  }
  return (
    <TouchableOpacity
      onPress={handleReset}
      className="flex-[0.1]mt-10  border px-8 py-4 rounded-lg mb-28 bg-[#0074a6]"
    >
      <Text className="text-white font-raleway text-xl font-bold">Reset</Text>
    </TouchableOpacity>
  );
};

export default Reset;
