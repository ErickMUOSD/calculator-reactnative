import React, { useState } from "react";
import type { Node } from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

import { CalculadoraScreen } from "./src/screens/CalculadoraScreen";
import { styles } from "./src/theme/appTheme";
import { ButtonTap } from "./src/components/ButtonTap";

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="purple" barStyle="light-content" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
