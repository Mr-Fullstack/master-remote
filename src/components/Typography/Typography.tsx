import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { TypographyText } from './TypographyStyles';
import theme from '../../../theme';

export interface TypographyProps extends PropsWithChildren{
  model: 'body'| 'heading';
  size:  'x1' | 'x2' | 'x3' | 'x4' | 'x5';
  color?:string
}

export function Typography({color,model,size,children}:TypographyProps) {
  return (
    <View>
      <TypographyText color={color} model={model} size={size}>{children}</TypographyText>
    </View>
  )
}