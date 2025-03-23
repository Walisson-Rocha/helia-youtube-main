import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function HouseDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>House ID: {id}</Text>
      <Text>HouseDetails</Text>
    </View>
  );
}