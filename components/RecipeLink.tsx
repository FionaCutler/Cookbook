import { Image } from 'expo-image';
import { ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  imgSource: ImageSourcePropType,
  title: string,
};

export default function RecipeLink({imgSource, title}: Props) {
    return (
    <View style={styles.container}>
        <Pressable onPress={() => alert('You pressed a button.')}>
            <Image source={imgSource} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    </View>);
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

  },
  image: {
    width: 300,
    height: 240,
  },
  title:{
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  }
});