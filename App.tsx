import 'react-native-gesture-handler';

import RootStack from './navigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return(
    <>
    {/* <StatusBar style="auto" /> */}
    <RootStack />
    </>);
}
