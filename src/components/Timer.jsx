import { StyleSheet, Text, View } from "react-native";

export default function Timer({ time, setTime }) {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#F2F2F2",
    padding: 15,
    borderRadius: 15,
    justifyContent: "center",
  },
  time: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});
