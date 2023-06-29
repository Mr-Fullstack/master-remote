import { View, Text } from 'react-native'
import React from 'react'
import { Row, Rows, Table } from 'react-native-table-component'
import { StyleSheet } from 'react-native'
import { useApp } from '../../../contexts/UserContext';




export function DashboardPartnerList()  {

  const {partners} = useApp();

  const TranslatedLabelPartners = [ 
    'Nome',
    'Cidade',
    'Id',
    'Usuário',
    'Versão'
  ];

  const data = {
    tableHead: Object.values(partners).map(partner=> Object.keys(partner))[0].map((label,index)=> label.replace(label,TranslatedLabelPartners[index]) ),
    tableData: partners.map(partner=>Object.values(partner))
  }

  return (
    <View>
       <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={data.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={data.tableData} textStyle={styles.text}/>
        </Table>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
})