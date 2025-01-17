import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];

export default function Header({ currentTime, setCurrentTime, setTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          style={[
            styles.itemStyle,
            currentTime !== index && { borderColor: "transparent" },
          ]}
          key={index}
          onPress={() => handlePress(index)}
        >
          <Text style={{ fontWeight: "bold" }}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  itemStyle: {
    width: "33.33%",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 10,
    padding: 5,
    borderColor: "white",
    marginVertical: 20,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
