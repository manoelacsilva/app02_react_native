import { SafeAreaView } from 'react-native'

import Comp1 from './src/components/Comp1'
import Comp2, { Comp2a } from './src/components/Comp2'

import Parametro from './src/components/Parametro'
import Parametro2 from './src/components/Parametro2'

function App() {
  return (
    // SafeAreaView é apenas para ios, mas tem o react-native-safe-area-context
    <SafeAreaView>
      <Comp1 />
      <Comp2 />
      <Comp2a />

      <Parametro v1={113+1} v2={2220} />
	    <Parametro v1="113+1" v2={1234} />

      <Parametro2 v1="04" v2={"a2220"} />        
	    <Parametro2 v1={3+1} v2={7} />
    </SafeAreaView>
  );
}

export default App
