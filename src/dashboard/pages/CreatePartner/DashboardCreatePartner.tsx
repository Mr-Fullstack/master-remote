import { View, Text, Alert } from 'react-native'
import React from 'react'
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { Controller, RegisterOptions, useForm } from 'react-hook-form';
import { PageContainer } from '../../../components/PageContainer/PageContainer';
import { InputForm } from '../../../components/InputForm/InputForm';
import ButtonTouchable from '../../../components/ButtonTouchable/ButtonTouchable';
import { Typography } from '../../../components/Typography/Typography';
import { Image } from 'react-native';
import { useApp } from '../../../contexts/UserContext';



interface SignupPartnersFormValues {
  userId: string;
}

export interface FormSigninValidateProps{
  userId:RegisterOptions<SignupPartnersFormValues,"userId">;
}

export function DashboardCreatePartner() {
  const {setPartners} = useApp();
    const { 
      control,
      handleSubmit,
      reset,
      formState: { errors,isValid } } = useForm<SignupPartnersFormValues>({mode:'all',criteriaMode:"all",shouldFocusError:true});
  
    const theme = useTheme();
    const navigation = useNavigation();

    
    const onSubmit = (data:SignupPartnersFormValues)=>{
      // console.warn(data.password)
      if( data.userId.length ===9) 
      {
        Alert.alert("Sucesso!","Usuário Cadastrado!");
       
        setPartners(oldState => [...oldState,{
          name:'Sem informações',
          city:'Anywhere',
          id:data.userId,
          user:'Novo Usuário',
          version:'Sem informações'
        }])
        reset();
      }
      else
      {
        Alert.alert("Error!","Este ID não é válido !");
      }
    };


    React.useEffect(()=>{
      reset();
    },[])
  
  return (
    <PageContainer>

<View style={{marginTop:40, padding:24}}>
      <View style={{marginTop:20,flexDirection:"row", gap:32, alignItems:"flex-start",justifyContent:"space-between"}}>
        <Controller
        control={control}
        rules={{
          required: "Precisar informar o id de um usuário!",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputForm 
            maxLength={9}
            keyboardType="numeric"
            error={errors.userId?.message && errors.userId?.message }
            label="ID do Usuário"
            placeholder="Informe o ID do usuário"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="userId"
        />
      </View>
      <View style={{marginTop:20,flexDirection:"row", gap:32, alignItems:"flex-start",justifyContent:"flex-end"}}>
        <ButtonTouchable onPress={handleSubmit(onSubmit)} style={{paddingTop:24}}>
          <Image source={require("../../../assets/images/key_primary.png")}  style={{width:56, objectFit:"contain", marginRight:8}}/>
          <Typography model='heading' size='x2' color={theme.colors.primary}>Cadastrar</Typography> 
        </ButtonTouchable>
      </View>
    </View>
    </PageContainer>
    
  )
}


