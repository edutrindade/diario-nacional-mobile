import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Details from '../../screens/Details';
import { INews } from '../../interfaces/INews';
import Profile from '../../screens/Profile';

export type RootStackParamList = {
  Home: undefined;
  Details: { newsItem: INews };
  Profile: undefined;
  Notifications: undefined;
  Settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const PublicRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
      <Screen name='Home' component={Home} />
      <Screen name='Details' component={Details} />
      <Screen name='Profile' component={Profile} />
    </Navigator>
  );
};

export default PublicRoutes;
