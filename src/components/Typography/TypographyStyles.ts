import { RFValue } from "react-native-responsive-fontsize";
import { css, styled } from "styled-components/native";
import theme from "../../../theme";

interface TypographyTextProps {
  model: 'body'| 'heading';
  size:  'x1' | 'x2' | 'x3' | 'x4' | 'x5';
  color?:string;
}

export const TypographyText = styled.Text<TypographyTextProps>`

  font-size: ${({theme, size})=> RFValue(theme.font.sizes[size])}px;
  color: ${({theme, color})=> color ? color : theme.colors.text};

  ${({theme, model})=> model ==='body' && css`
    font-family: ${theme.font.weight.regular };
  `} 

  ${({theme, model})=> model ==='heading' && css`
    font-family: ${theme.font.weight.black};
  `}
`;
