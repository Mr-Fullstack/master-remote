import { Typography } from '../../../components/Typography/Typography';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { styled } from 'styled-components/native'

export const BoxDashboardWrapper = styled.View`
  padding: ${RFPercentage(2)}px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  overflow: hidden;
  width:32.4%;
  align-self:stretch;
`;


export const BoxDashboardTitle = styled(Typography)`
  
`;

