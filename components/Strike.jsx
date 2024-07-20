import React from "react";
import { View } from "react-native";

const Strike = ({ strikeClass }) => {
  if (strikeClass === "strike-row-1")
    return (
      <View className={` bg-[#ff8c00] h-[4px] w-[300px] bottom-[155]`}></View>
    );
  if (strikeClass === "strike-row-2")
    return (
      <View className={` bg-[#ff8c00] h-[4px] w-[300px] bottom-[53]`}></View>
    );
  if (strikeClass === "strike-row-3")
    return <View className={` bg-[#ff8c00] h-[4px] w-[300px] top-[49]`}></View>;
  if (strikeClass === "strike-column-1")
    return (
      <View
        className={` bg-[#ff8c00] h-[300px] w-[4px] bottom-[200] left-[46]`}
      ></View>
    );
  if (strikeClass === "strike-column-2")
    return (
      <View
        className={` bg-[#ff8c00] h-[300px] w-[4px] bottom-[200] left-[148]`}
      ></View>
    );
  if (strikeClass === "strike-column-3")
    return (
      <View
        className={` bg-[#ff8c00] h-[300px] w-[4px] bottom-[200] left-[250]`}
      ></View>
    );
  if (strikeClass === "strike-diagonal-1")
    return (
      <View
        className={` bg-[#ff8c00] h-[4px] w-[400px]    transform rotate-45 bottom-[50] right-[50] `}
      ></View>
    );
  if (strikeClass === "strike-diagonal-2")
    return (
      <View
        className={` bg-[#ff8c00] h-[4px] w-[400px]    transform -rotate-45 bottom-[50] right-[50] `}
      ></View>
    );

  console.log(strikeClass);
};

export default Strike;
