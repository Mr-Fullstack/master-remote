import React from 'react'
import { DashboardContainer } from '../../Dashboard.Styles'
import { BoxDashboard } from '../../components/BoxDashboard/BoxDashboard'
import { Typography } from '../../../components/Typography/Typography'
import theme from '../../../../theme'
import { useNavigation, useTheme } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { View } from 'react-native'


export function DashboardHome() {

  const navigation = useNavigation();
  const  theme = useTheme();
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:"#FFF", paddingLeft:24,paddingVertical:32}}>
        <Typography model='heading' size='x3' color={theme.colors.primary}> Olá! Philip M.</Typography>
      </View>
      <DashboardContainer style={{backgroundColor:"#FFF" , flex:1, gap:16, alignItems:"flex-start"}}>
        <BoxDashboard title="Parceiros atual">
          <Typography model='body' size='x5'color={theme.colors.primary}>625</Typography>
        </BoxDashboard>
        <BoxDashboard title="Chamados Resolvidos">
          <Typography model='body' size='x5'color={theme.colors.primary}>1.484</Typography>
        </BoxDashboard>
        <BoxDashboard title="Chamados em abertos">
          <Typography model='body' size='x5'color={theme.colors.primary}>125</Typography>
        </BoxDashboard>
        <BoxDashboard title="Documentos compartilhados">
          <Typography model='body' size='x5'color={theme.colors.primary}>245</Typography>
        </BoxDashboard>
        <BoxDashboard title="Usuários online">
          <Typography model='body' size='x5'color={theme.colors.primary}>107</Typography>
        </BoxDashboard>
      </DashboardContainer>
    </View>
      

  )
}