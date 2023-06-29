import { TypographyProps } from './../Typography/Typography';
import { RFValue } from "react-native-responsive-fontsize";
import { styled, css } from "styled-components/native";
import { Typography } from "../Typography/Typography";
import { TextInput } from "react-native";


export const InputWrapper = styled.View<{error:boolean}>`
  margin-top: ${RFValue(4)}px;
  min-width: 0;
  border: 1px solid ${({theme})=> theme.colors.text};
  border-radius: 8px;
  padding-left: ${RFValue(8)}px;

  ${({theme,error})=> error && css`
    border: 1px solid ${({theme})=> theme.colors.danger};
  `}
`; 

export const Input = styled(TextInput)`
  min-width: 0;
  font-size:${({theme})=> RFValue(theme.font.sizes['x2'])}px;
  border: 0px;
  font-family:${({theme})=> theme.font.weight.regular};
  color: ${({theme})=> theme.colors.primary};
`; 

export const InputLabel = styled(Typography)<TypographyProps>``; 
