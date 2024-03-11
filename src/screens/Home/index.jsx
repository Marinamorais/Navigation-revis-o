import { View, Text } from "react-native";
import React from "react";
import Title from "../../components/Title";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title={"Home"} />
    </View>
  );
}
