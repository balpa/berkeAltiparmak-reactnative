import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CreateProduct from './pages/CreateProduct';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home} />
        <Stack.Screen
          name='Detail'
          options={({ route }: any) => ({
            title: route.params.name
          })}
          component={ProductDetail} />
        <Stack.Screen
          name='Create'
          component={CreateProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
