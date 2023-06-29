import { View, Text } from 'react-native'
import React from 'react'
import ButtonTouchable from '../../../components/ButtonTouchable/ButtonTouchable'
import { Typography } from '../../../components/Typography/Typography'
import CheckBox from '@react-native-community/checkbox'
import ConfigBox from './ConfigBox'
import { ScrollView } from 'react-native-gesture-handler'

export function DashboardConfig() {

  return (
    <ScrollView style={{height:'100%'}}>
      <ConfigBox title='Funções' options={
        [
          {
            label:'habilitar leitura do aqruivo MasterRemote.xml '
          }
        ]
      }/>
      <ConfigBox title='Parceiros' options={
        [
          {
            label:'Não exibir pedido de suporte se há sessoes sendo feitas'
          }
        ]
      }/>
      <ConfigBox title='Comunicação' multipleSelection={true} options={
        [
          {
            label:'Amazon São Paulo'
          },
          {
            label:'DataCenter Vitória ES'
          },
          {
            label:'DataCenter São Bernado do Campo - SP'
          },
          {
            label:'DataCenter São José do Rio Preto - SP'
          },
          {
            label:'Conexão direta'
          }
        ]
      }/>
      <ConfigBox title='Chat' options={
        [
          {
            label:'Não trazer a tela do chat apara frente'
          }
          ,{
            label:'Nunca trazer a tela do chat apara frente quando estiver em sessão com qualque usuario'
          },
          {
            label:'Não fechar a tela do chat da máquina remota se você fecha a sua'
          },
          {
            label:'Exibir no do parceiro + Grupo + Subgrupo + Familia na aba do Chat'
          }
        ]
      }/>

    </ScrollView>
  )
}