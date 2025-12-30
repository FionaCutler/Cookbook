import { useLocalSearchParams } from 'expo-router';
import { Text, View } from "react-native";
type Props = {
    id:string;
};
export default function RecipeView() {
  const { id} = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Recipe goes here {id}</Text>
    </View>
  );
}
