import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { styles } from "../theme/appTheme";

interface Props {
  text: string;
  color?: string;
  width?: number;
  action: (val: string) => void;
}

export const ButtonTap = ({ text, color = "yellow", width = 80, action }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={() => action(text)}>
      <View style={{ ...styles.button, backgroundColor: color, width: width }}>
        <Text style={styles.textButton}>{text}</Text>
      </View>

    </TouchableWithoutFeedback>
  );


};
