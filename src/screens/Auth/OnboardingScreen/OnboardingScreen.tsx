import React from 'react'
import { Image, View } from 'react-native'

import AR from '@assets/arrowRight.png'
import { useOnboardStorage } from '@contexts'
import { useNavigation } from '@react-navigation/native'
import { onboarding } from '@utils'
import AppIntroSlider from 'react-native-app-intro-slider'

import { GreenButton, Onboarding } from '@components'
import { useResetNavigation } from '@hooks'

export function OnboardingScreen() {
  const { navigate } = useNavigation()

  const { setOnboard } = useOnboardStorage()

  const { reset } = useResetNavigation()

  function handleDone() {
    navigate('LoginScreen')
    reset({
      routeName: 'LoginScreen',
    })
    setOnboard(true)
  }

  return (
    <AppIntroSlider
      data={onboarding}
      renderItem={({ item }) => <Onboarding item={item} />}
      keyExtractor={(item) => item.key}
      renderNextButton={() => (
        <Image source={AR} alt="" className="absolute -left-10 -top-16" />
      )}
      showNextButton
      showSkipButton={false}
      renderDoneButton={() => (
        <View className="absolute bottom-40 right-48 w-40">
          <GreenButton title="Vamos lá" onPress={handleDone} />
        </View>
      )}
      dotStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      activeDotStyle={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        width: 50,
        height: 10,
        borderRadius: 20,
      }}
    />
  )
}
