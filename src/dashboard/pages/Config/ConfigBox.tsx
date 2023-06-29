import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Typography } from '../../../components/Typography/Typography'
import ButtonTouchable from '../../../components/ButtonTouchable/ButtonTouchable'
import CheckBox from '@react-native-community/checkbox'
import { FlatList } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'

interface ConfigBoxOptionsProps{
  label:string,
  action?:()=>void;
}

interface ConfigBoxProps{
  title:string;
  description?:string;
  alerta?:string;
  options:ConfigBoxOptionsProps[];
  multipleSelection?:boolean;
}

const ConfigBoxCheckBox = ({action,label}:ConfigBoxOptionsProps)=> {

  const [toggleCheckBox, setToggleCheckBox] = React.useState();

  const handlerCheck = ( newValue:any )=>{

    if(action)
    {
      action()
    }
    setToggleCheckBox(newValue)
  }

  return(
    <ButtonTouchable onPress={() => handlerCheck(!toggleCheckBox) }>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => handlerCheck(newValue) }
        />
      <Typography model='body' size='x1'>
       {label}
      </Typography>
    </ButtonTouchable>
  )
}

const ConfigBox = ({title,description,alerta,options,multipleSelection=false}:ConfigBoxProps) => {

  const theme = useTheme();

  const [ active, setActive ] = React.useState<number>(0);

  const handlerCheck = (index:number)=> {

    if(options && options[index])
    {
      if(options[index].action)
      {
        options[index];
      }
    }

    setActive(index);
  }

  return (
    <View style={{padding:24,backgroundColor:'#FFF',flex:1}}>
      <Typography model='heading' size='x3' color={theme.colors.primary}>
        {title}
      </Typography>
      {
        description &&  
        <Typography model='body' size='x2'>
          {description}
        </Typography>
      }
      { 
        alerta &&
        <Typography model='body' size='x1'>
          {alerta}
        </Typography>
      }
      { multipleSelection &&
        options.map((option,index) => (
          <ButtonTouchable onPress={() => handlerCheck(index)} key={title+index}>
          <CheckBox
            disabled={false}
            value={active === index}
            onValueChange={(newValue) => handlerCheck(index)}
          />
          <Typography model='body' size='x1'>
           {option.label}
          </Typography>
        </ButtonTouchable>
        ))
      }
      { !multipleSelection &&
        options.map((option,index) => (
          <ConfigBoxCheckBox {...option} key={title+index} />
        ))
      }
    </View>
  )
}

export default ConfigBox;