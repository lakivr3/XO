import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Tile = ({ class1, onPress, value }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${class1} bg-[#23272f] justify-center items-center`}
    >
      <Text className="font-raleway text-3xl font-bold text-white">
        {value}
      </Text>
    </TouchableOpacity>
  );
};

export default Tile;
