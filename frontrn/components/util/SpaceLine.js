import React from "react";
import { View } from "react-native";

export const SpaceLine = props => {
  const spaceHeight = props.spaceHeight ? props.spaceHeight : 10;
  return (
    <View style={{ backgroundColor: "transparent", height: spaceHeight }} />
  );
};
