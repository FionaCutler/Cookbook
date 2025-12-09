import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <>
    <Stack.Screen options={{title:'Ooops! Not Found', 
        headerTintColor: '#fff',
        headerStyle:{
            backgroundColor: "#cc5500",
        }
        }} />
    <View style={styles.container}>
    <Text style={styles.title}>404 Page Not Found</Text>
    <Text>The Page you are looking for was not found or does not exist.</Text>
      <Link href="/" style={styles.button}>
       Go back to Home screen</Link>
    </View>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fffec15d",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 32,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});