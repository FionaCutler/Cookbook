import RecipeLink from "@/components/RecipeLink";
import { FlatList, View } from "react-native";


const minestroneImage = require('@/assets/images/minestrone.jpg');
const chickenImage = require('@/assets/images/chicken.webp');
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Minestrone',
    imgSource: minestroneImage,
  },
  {
    id: 'bd1acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Chicken and Mashed Potatoes',
    imgSource: chickenImage,
  },
];

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"#fffec15d"
        }}>
       <FlatList
       data={DATA}
      keyExtractor={item => item.id}
       renderItem={({item})=> <RecipeLink title={item.title} imgSource={item.imgSource} />}></FlatList>
    </View>
  );
}
