import { View, Text, Alert } from 'react-native'
import React from 'react'
import ButtonTouchable from '../../../components/ButtonTouchable/ButtonTouchable'
import { Typography } from '../../../components/Typography/Typography'
import { useTheme } from 'styled-components/native'

export default function DashboardSupport() {

  const theme = useTheme();

  return (
    <View style={{padding:24}}>
      <View style={{ gap:16,backgroundColor:"#FFF", padding:24}}>
          <Typography model='heading' size='x3' >
            Informação sobre sua assinatura
          </Typography>
          <View >
            <Typography model='body' size='x2' >
              Número do grupo 
            </Typography>
            <Typography model='body' size='x1' >
              570
            </Typography>
          </View>
          <View>
            <Typography model='body' size='x2' >
              Número de canais contratados
            </Typography>
            <Typography model='body' size='x1' >
              1
            </Typography>
          </View>
          <View>
            <Typography model='body' size='x2' >
              Válidade da licença
            </Typography>
            <Typography model='body' size='x1' >
              01/07/2023
            </Typography>
          </View>
          <View>
            <Typography model='body' size='x2' >
              Dias para o vencimento
            </Typography>
            <Typography model='body' size='x1' >
              3
            </Typography>
          </View>
          <View>
            <Typography model='body' size='x2' >
              Espaço de Backup utilizado
            </Typography>
            <Typography model='body' size='x1' >
              0 By
            </Typography>
          </View>
      </View>
      <ButtonTouchable style={{marginTop:64,backgroundColor:theme.colors.primary, borderRadius:8, marginLeft:"auto", marginRight:"auto", justifyContent:"center",width:350, padding:16}} onPress={()=>Alert.alert("Aviso!",`
          Ops! Essa opção esta bloqueada no momento!
        `)}>
          <Typography model='body' size='x1' color={theme.colors.background}>
            Solicitar acesso do suporte
          </Typography>
        </ButtonTouchable>
    </View>
  )
}