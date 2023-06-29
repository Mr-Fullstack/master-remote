import { NavigationContainer } from '@react-navigation/native';
import React, { PropsWithChildren } from 'react'


interface UserProps{
  username?:"admin";
  password?:"admin";
}
interface Partners{
  name:string;
  city:string;
  id:string;
  user:string;
  version:string;
}

interface UserContextProps{
  user?:UserProps;
  partners:Partners[];
  setUser:React.Dispatch<React.SetStateAction<UserProps|undefined>>
  setPartners:React.Dispatch<React.SetStateAction<Partners[]>>
}

const UserContext = React.createContext({} as UserContextProps );

const InitialMockupPartners:Partners[] = [
  {
    name: 'Código de Laboratório', 
    city:'Salvador',
    id: '900014181',
    user:'Marcos Antonio Cerqueira',
    version:'5.20.5'
  },
  {
    name: 'Google', 
    city:'São Francisco',
    id: '400414101',
    user:'Jane Doe',
    version:'4.5.8'
  },
  {
    name:'Apple',
    city: 'São Paulo',
    id:'010017181',
    user:'Jonh Doe',
    version:'5.2'
  },
  {
    name:'Esmail Corp',
    city:'New York',
    id: '750704788',
    user:'Sam Esmail',
    version:'5.18.1'
  }
]
function AppUserContext({children}:PropsWithChildren) {

  const [user,setUser] = React.useState<UserProps>();
  const [partners,setPartners] = React.useState<Partners[]>(InitialMockupPartners);
  
  const values = React.useMemo(()=>({
      partners,
      user,
      setUser,
      setPartners
    })
  ,[user])
  return (

    <UserContext.Provider value={values} >
      <NavigationContainer>
          {children}
      </NavigationContainer>
    </UserContext.Provider>
    
  )
}

export default AppUserContext;

export const useApp = () => React.useContext(UserContext);
