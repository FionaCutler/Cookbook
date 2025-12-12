import CircleButton from "@/components/CircleButton";
import RecipeLink from "@/components/RecipeLink";
import { FlatList, StyleSheet, View } from "react-native";


const minestroneImage = require('@/assets/images/minestrone.jpg');
const chickenImage = require('@/assets/images/chicken.webp');
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Minestrone',
    imgSource: minestroneImage,
    description: "Recipe credit: ",
    ingredients: [
      "1 8oz package of Macaroni", 
      "1 can/jar pasta sauce",
      "1 can red kidney beans",
      "1 can sliced carrots",
      "1 can green beans",
      "1 can diced tomatoes",
      "1-2 bouillon cubes",
    ],
    steps: [
      "In a large pot, combine pasta sauce, diced tomatoes, green beans, kidney beans, carrots, and bouillon cubes.",
      "Add 2-4 cups water, depending on desired thickness. Season to taste with salt and pepper",
      "Bring to a boil, add pasta.",
      "Simmer 12-15 minutes, stirring occasionally, until pasta is tender."
    ],
    tips: [
      "Make it heartier by adding cooked beef, sausage, or chicken",
      "Pair with garlic bread, crusty rolls, or even a grilled cheese sandwich",
      "Top with parmesan before serving",
    ],
    credit: "https://www.facebook.com/TheRealDollarTreeDinners"
  },
  {
    id: 'bd1acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Chicken and Mashed Potatoes',
    imgSource: chickenImage,
  },
];

function createNew(){

}
export default function Index() {
  return (
    <View
      style={styles.container}>
       <FlatList
       data={DATA}
      keyExtractor={item => item.id}
       renderItem={({item})=> <RecipeLink title={item.title} imgSource={item.imgSource} />}></FlatList>
       <View style={styles.optionsRow}>
        <CircleButton onPress={createNew}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#fffec15d"
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  }
});