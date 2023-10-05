// IMPORTANDO A NAVEGAÇÃO
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "./screens/Cadastro";
import CreateUser from "./screens/CreateUser"
import FeedBooks from "./screens/FeedBook"
import DetailBook from "./screens/DetailsBook";
import Cadastro from "./screens/Cadastro";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
<Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: 'red',
          },
        }}
      >
        <Stack.Screen 
          name='Login'
          component={Cadastro}
          options={{
            title: "Crie uma Categoria!!!",
            headerStyle: {
              backgroundColor: '#333', 
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

