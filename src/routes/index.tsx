import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PublicRoutes from './Public/public.routes';

const Routes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen options={{ headerShown: false }} name='PublicRoutes' component={PublicRoutes} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
