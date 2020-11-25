import 'react-native-gesture-handler';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/view/Home';
import MainMenuScreen from './app/view/MainMenu';
import ExperienciaScreen from './app/view/Experiencia';
import SolucionesScreen from './app/view/Soluciones';
import ATCScreen from './app/view/ATC';
import ServicioScreen from './app/view/Servicio';
import ContactScreen from './app/view/contact';
import Header from './app/view/util/header';
import HeaderLink from './app/view/util/header_link';
import Footer from './app/view/util/footer';
import LinkPageScreen from './app/view/util/linkPage';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MainMenu" component={MainMenuScreen} />
          <Stack.Screen name="Experiencia" component={ExperienciaScreen} />
          <Stack.Screen name="Soluciones" component={SolucionesScreen} />
          <Stack.Screen name="ATC" component={ATCScreen} />
          <Stack.Screen name="Servicio" component={ServicioScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="Header" component={Header} />
          <Stack.Screen name="HeaderLink" component={HeaderLink} />
          <Stack.Screen name="Footer" component={Footer} />
          <Stack.Screen name="LinkPage" component={LinkPageScreen} />
        </Stack.Navigator>          
      </NavigationContainer>
    );
  }
}

export default App;