import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import { ImageWrapper } from './LogoStyle'

export function Logo() {
  return (
    <View style={{width:"100%"}}>
       <ImageWrapper source={require('../../assets/images/logo.png')} />
    </View>
  )
}
