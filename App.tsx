import { SafeAreaView } from 'react-native';
import Comp1 from './src/components/Comp1';
import Comp2, { Comp2a } from './src/components/Comp2';

function App() {
  return (
    // SafeAreaView é apenas para ios, mas tem o react-native-safe-area-context
    <SafeAreaView>
      <Comp1 />
      <Comp2 />
      <Comp2a />
    </SafeAreaView>
  );
}

export default App;
