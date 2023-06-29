import { RFPercentage } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";


export const ImageWrapper = styled.Image`
  max-width: 100%;
  object-fit: contain;
  width: auto;
  height: ${RFPercentage(10)}px;
`;