import { LoginScreen } from '@screens'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <LoginScreen />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}