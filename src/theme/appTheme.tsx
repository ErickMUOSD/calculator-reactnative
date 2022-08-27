import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black"
  },
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-end"
  },
  smallResult: {
    color: "white",
    fontSize: 30,
    textAlign: "right"
  },
  result: {
    color: "white",
    fontSize: 50,
    textAlign: "right"
  },
  button: {
    height: 80,
    width: 80,
    marginHorizontal: 5,
    backgroundColor: "#333333",
    borderRadius: 100,
    justifyContent: "center"
  },
  textButton: {
    color: "white",
    textAlign: "center",
    fontWeight: "300",
    fontSize: 30
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical:4
  }
});
