import React, { PropsWithChildren } from 'react'
import { PageContainerWraper } from './PageContainerStyles'
import { View, ScrollViewProps } from 'react-native'

export function PageContainer({style,children}:ScrollViewProps & PropsWithChildren) {
  return (
    <PageContainerWraper keyboardShouldPersistTaps="handled">
      <View style={[{width:550, maxWidth:"100%", marginLeft:'auto',marginRight:'auto', paddingBottom:64,paddingTop:64},style]}>
        {children}
      </View>
    </PageContainerWraper>
  )
}