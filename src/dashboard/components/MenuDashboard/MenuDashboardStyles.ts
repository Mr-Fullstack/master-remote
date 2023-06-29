import { styled } from "styled-components/native";

export const MenuWrapper = styled.View``;

export const MenuHeader = styled.View`
  margin-bottom: 32px;
  width:100%;
  padding-top:16px; 
  align-items:center;
`;
export const MenuAppIcon = styled.Image`
  object-fit:contain;
  height:50px;
  width:250px;
`;

export const MenuItem = styled.TouchableOpacity`
  flex-direction:row;
  gap:8px;
  align-items:center;
  padding: 16px;
`;