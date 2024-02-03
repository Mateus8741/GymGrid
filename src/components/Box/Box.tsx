import React from 'react'
import * as reactNative from 'react-native'

interface Props {
  scrollable?: boolean
  children: React.ReactNode
  style?: reactNative.ViewStyle
}

export function Box({ scrollable = false, style, children }: Props) {
  const Container = scrollable ? reactNative.ScrollView : reactNative.View

  return (
    <reactNative.KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={reactNative.Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Container
        style={{ flex: 1, backgroundColor: 'white' }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <reactNative.View
          style={[
            { flex: 1, justifyContent: 'center', alignItems: 'center' },
            style,
          ]}
        >
          {children}
        </reactNative.View>
      </Container>
    </reactNative.KeyboardAvoidingView>
  )
}