import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React, { PropsWithChildren } from 'react'
import theme from '../../../theme';

type ButtonTouchable = PropsWithChildren & TouchableOpacityProps & {
  title?:string;
  textColor?:string;
}
export default function ButtonTouchable({textColor,title,children,style,...props}:ButtonTouchable) {
  return (
    <TouchableOpacity style={[{flexDirection:"row",alignItems:"center"},style]} {...props}>
      {title && <Text style={{color:textColor}}>{title}</Text>}
      {children && children}
    </TouchableOpacity>
  )
}