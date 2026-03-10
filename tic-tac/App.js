import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.gameContainer1}>
        <View style={styles.gameRow}>
          <View style={styles.gameCell}>
            <Text style={styles.cellText}>O</Text>
          </View>
          <View style={styles.gameCell}>
            <Text style={styles.cellText}>_</Text>
          </View>
          <View style={styles.gameCell}>
            <Text style={styles.cellText}>O</Text>
          </View>
        </View>

        <View style={styles.gameRow}>
          <View style={styles.gameCell}>
            <Text style={styles.cellText}>X</Text>
          </View>
          <View style={styles.gameCell}>
            <Text style={styles.cellText}>X</Text>
          </View>
          <View style={styles.gameCell}>
            <Text style={styles.cellText}>O</Text>
          </View>
        </View>

        <View style={styles.gameRow}>
          <View style={styles.gameCell}>
            <Text style={styles.cellText}>X</Text>
          </View>
          <View style={styles.gameCell}>
            <Text style={styles.cellText}>_</Text>
          </View>
          <View style={styles.gameCell}>
            <Text style={styles.cellText}>O</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gameContainer1: {
    width: 300,
    height: 300,
    padding: 40,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "#f78c00",
  },
  gameRow: {
    flex: 1,
    flexDirection: "row",
  },
  gameCell: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: "#248001",
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
});
