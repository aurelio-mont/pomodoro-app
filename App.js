import { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';


const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("PMO" | "SHORT" | "BREAK");

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <View 
        style={{ 
          flex: 1,
          paddingHorizontal: 15, 
          paddingTop: Platform.OS === 'android' ? 30 : 0,
        }}
      >
        <Text style={styles.text}>Pomodoro</Text>
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} />
        <Timer time={time} setTime={setTime} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  }
});
