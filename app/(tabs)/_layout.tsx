import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
  <Tabs       
    screenOptions={{
        tabBarActiveTintColor: '#cc5500',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#cc5500',
        },
        }} >
    <Tabs.Screen name="index" 
    options={{ 
        title:'Home', 
        tabBarIcon: ({color,focused}) =>(
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
        ),
     }}/> 
     <Tabs.Screen name="info" 
      options={{ 
        title:'Info', 
        tabBarIcon: ({color,focused}) =>(
            <Ionicons name={focused ? 'information-circle': 'information-circle-outline'} color={color} size={24} />
        ),
     }}/>
  </Tabs>);
}
