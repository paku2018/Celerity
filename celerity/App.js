import 'react-native-gesture-handler';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuScreen from './app/view/MainMenu';
import HomeScreen from './app/view/Home';
import PagosScreen from './app/view/Pagos';
import MainClubScreen from './app/view/club/main';
import CategoryClubScreen from './app/view/club/category';
import ClubLoginScreen from './app/view/club/login';
import SolicitaScreen from './app/view/SolicitaTuPlan';
import ServicioScreen from './app/view/ServicioTecnico';
import ATCScreen from './app/view/ATC';
import LinkPageScreen from './app/view/util/linkPage';
import Footer from './app/view/util/footer_1';

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
          <Stack.Screen name="Pagos" component={PagosScreen} />
          <Stack.Screen name="ClubMain" component={MainClubScreen} />
          <Stack.Screen name="ClubCategory" component={CategoryClubScreen} />
          <Stack.Screen name="Solicita" component={SolicitaScreen} />
          <Stack.Screen name="Servicio" component={ServicioScreen} />          
          <Stack.Screen name="ATC" component={ATCScreen} />
          <Stack.Screen name="footer" component={Footer} />
          <Stack.Screen name="LinkPage" component={LinkPageScreen} />
          <Stack.Screen name="ClubLogin" component={ClubLoginScreen} />
        </Stack.Navigator>          
      </NavigationContainer>
    );
  }
}

export default App;