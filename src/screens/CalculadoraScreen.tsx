import { Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "../theme/appTheme";
import { ButtonTap } from "../components/ButtonTap";

export const CalculadoraScreen = () => {
  const [number, setNumber] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [operator, setOperator] = useState("+");

  const clean = () => {
    setNumber("0");
  };
  const buildNumber = (textNumber: string) => {
   if(number.length < 10)
    setNumber(number + textNumber);
   else
    setNumber(number);

  };

  const insertOperator = (operator: string) => {
    setOperator(operator);
    setPreviousNumber(number);
    setNumber("");
  };
  const calcultate = (equal: string) => {

    setNumber(eval(number + operator + previousNumber));
  };
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.smallResult}>{previousNumber}</Text>
      <Text style={styles.result}>{number}</Text>

      <View style={styles.row}>
        <ButtonTap text="C" color="#9B9B9B" action={clean} />
        <ButtonTap text="+/-" color="#9B9B9B" action={clean} />
        <ButtonTap text="del" color="#9B9B9B" action={clean} />
        <ButtonTap text="/" color="orange" action={insertOperator} />
      </View>
      <View style={styles.row}>
        <ButtonTap text="7" color="#9B9B9B" action={buildNumber} />
        <ButtonTap text="8" color="#9B9B9B" action={buildNumber} />
        <ButtonTap text="9" color="#9B9B9B" action={buildNumber} />
        <ButtonTap text="*" color="orange" action={insertOperator} />
      </View>
      <View style={styles.row}>
        <ButtonTap text="4" color="#9B9B9B" action={buildNumber} />
        <ButtonTap text="5" color="#9B9B9B" action={buildNumber} />
        <ButtonTap text="6" color="#9B9B9B" action={buildNumber} />
        <ButtonTap text="-" color="orange" action={insertOperator} />
      </View>
      <View style={styles.row}>
        <ButtonTap text="1" color="#9B9B9B" action={buildNumber} />
        <ButtonTap text="2" color="#9B9B9B" action={buildNumber} />
        <ButtonTap text="3" color="#9B9B9B" action={buildNumber} />
        <ButtonTap text="+" color="orange" action={insertOperator} />
      </View>
      <View style={styles.row}>
        <ButtonTap text="0" color="#9B9B9B" width={160} action={buildNumber} />
        <ButtonTap text="." color="#9B9B9B" action={buildNumber} />
        <ButtonTap text="=" color="#9B9B9B" action={calcultate} />
      </View>
    </View>
  );
};
