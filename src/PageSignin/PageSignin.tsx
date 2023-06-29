import React from 'react';
import { Image, Button, TextInputProps, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, TextInput, TextInputComponent, Text, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {InputForm} from '../components/InputForm/InputForm';
import { Logo } from '../components/Logo/Logo';
import { PageContainerWraper } from '../components/PageContainer/PageContainerStyles';
import theme from '../../theme';
import { Typography } from '../components/Typography/Typography';
import { PageContainer } from '../components/PageContainer/PageContainer';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import {RegisterOptions, useForm ,Controller,SubmitHandler} from 'react-hook-form';
import ButtonTouchable from '../components/ButtonTouchable/ButtonTouchable';
import { useApp } from '../contexts/UserContext';

interface SigninFormValues {
  username: string;
  password: string;
}

export interface FormSigninValidateProps{
  username:RegisterOptions<SigninFormValues,"username">;
  password:RegisterOptions<SigninFormValues,"password">;
}

export function PageSignin() {

  const { setUser } = useApp();

  const { 
    control,
    handleSubmit,
    reset,
    formState: { errors,isValid } } = useForm<SigninFormValues>({mode:'all',criteriaMode:"all",shouldFocusError:true});

  const theme = useTheme();
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const onSubmit = (data:SigninFormValues)=>{
    // console.warn(data.password)
    if( data.password == "admin" && data.username == "admin") 
    {
      setUser({
        username:data.username,
        password:data.password
      })
      navigation.navigate("Dashboard",{screen:"DashboardHome"});
    }
    else
    {
      Alert.alert("Error","Usuário e senha incorretos ou usuário não existe!");
    }
  };

  return (

    <PageContainer>
      <Logo/>
        <View style={{marginTop:64}}>
          <Controller
          control={control}
          rules={{
            required: "Precisa informar um usuário!",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputForm 
              error={errors.username?.message && errors.username?.message }
              label="Usuário"
              placeholder="Informe o usuário"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
          />
          <View style={{marginTop:20,flexDirection:"row", gap:32, alignItems:"flex-start",justifyContent:"space-between"}}>

          <Controller
          control={control}
          rules={{
            required: "Precisa informar uma senha!",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputForm
              style={{width:'80%'}} 
              error={errors.password?.message && errors.password?.message }
              label="Senha"
              placeholder="Informe a senha"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
          <ButtonTouchable onPress={handleSubmit(onSubmit)} style={{paddingTop:24}}>
            <Image source={require("../assets/images/key_primary.png")}  style={{width:56, objectFit:"contain", marginRight:8}}/>
            <Typography model='heading' size='x2' color={theme.colors.primary}>Entrar</Typography> 
          </ButtonTouchable>
          </View>

          <View style={{flexDirection:"row",gap:20,marginTop:10, justifyContent:"space-between", alignItems:"center"}}>
          <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}} onPress={(newValue) => setToggleCheckBox(!toggleCheckBox)}>
            <CheckBox
              onCheckColor={theme.colors.primary}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Typography model='body' size='x1'>Salvar informações</Typography>
          </TouchableOpacity>
          <ButtonTouchable style={{flexDirection:"row", alignItems:"center"}}>
            <Image source={require("../assets/images/logins.png")}  style={{width:40, objectFit:"contain", marginRight:8}}/>
            <Typography model='body' size='x2'>Lista de logins</Typography>
          </ButtonTouchable>
          </View>
          <View style={{marginTop:32}}>
          <ButtonTouchable onPress={()=>Alert.alert("Aviso","Tente novamente mais tarde!")}>
            <Image source={require("../assets/images/user_plus.png")}  style={{width:40, objectFit:"contain" , marginRight:8}}/>
            <Typography  model='body' size='x2'>Criar uma conta de acesso</Typography>
          </ButtonTouchable>
          <ButtonTouchable onPress={()=>Alert.alert("Aviso","Tente novamente mais tarde!")}>
            <Image source={require("../assets/images/connect.png")}  style={{width:40, objectFit:"contain",marginRight:8}}/>
            <Typography  model='body' size='x2'>Ajustar parâmetros de comunicação</Typography>
          </ButtonTouchable>
          </View>
          </View>
    </PageContainer>
  )
}