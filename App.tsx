import { Platform, SafeAreaView } from 'react-native';
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Girassol_400Regular } from '@expo-google-fonts/girassol';
import Home from './src/screens/Home';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App() {
  const queryClient = new QueryClient();
  const statusBarHeight = Platform.OS === 'android' ? 30 : 16;
  const [fontLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
    Girassol_400Regular,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className='flex-1 bg-white mt-8' style={{ marginTop: statusBarHeight }}>
        <Home />
        <StatusBar style='auto' />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
