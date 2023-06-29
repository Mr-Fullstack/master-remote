import React from 'react';
import { View, TextInputProps, TextInput } from 'react-native'
import { Input, InputLabel, InputWrapper } from './InputFormStyle';
import theme from '../../../theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { Typography } from '../Typography/Typography';
import { useTheme } from 'styled-components/native';

interface InputForm extends TextInputProps {
    label:string;
    error?:string;
}

export function InputForm ({error,label,style,onChangeText,value,...props}:InputForm) {
  const theme = useTheme();

  return (
    <View style={[{flex:1},style]}>
      <InputLabel 
        model='heading' 
        size='x3' 
        color={theme.colors.primary}
      >
      {label}
      </InputLabel>
      <InputWrapper error={ error ? true : false} >
        <Input onChangeText={onChangeText} value={value} {...props}/>
      </InputWrapper>
      {error && 
        <Typography model='body' size='x1' color={theme.colors.danger}>
          {error}
        </Typography> 
      }
    </View>

  )
}

