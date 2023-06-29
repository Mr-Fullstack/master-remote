import { styled } from "styled-components/native";

export const PageContainerWraper = styled.ScrollView`
  /* align-items: center; */
  padding: 24px;
  flex: 1;
  width: 100%;
  background-color: ${({theme})=> theme.colors.background};

`;