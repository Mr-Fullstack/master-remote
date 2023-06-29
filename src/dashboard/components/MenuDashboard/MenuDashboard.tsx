import React from 'react';
import { Image,  ImageSourcePropType } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Typography } from '../../../components/Typography/Typography';
import { useNavigation } from '@react-navigation/native';
import DashboardIcon from '../../../assets/images/dashboard.png';
import DashboardCreatePartners from "../../../assets/images/partner_add.png";
import DashboardConfig from '../../../assets/images/config.png';
import DashboardPartnerIcon from '.../../../assets/images/partners_list.png';
import DashboardBlogIcon from '../../../assets/images/Blog.png';
import DashboardSupportIcon from '../../../assets/images/support.png';
import { MenuAppIcon, MenuHeader, MenuItem, MenuWrapper } from './MenuDashboardStyles';
import { ScrollView } from 'react-native-gesture-handler';


export function MenuDashboard(props:DrawerContentComponentProps) {

  const navigation = useNavigation();

  const menuIcons:{[key:string]:MenuDashboardIcons} = {
    DashboardPartners: {
      label:"Parceiros",
      icon: DashboardPartnerIcon
    },
    DashboardHome:{
      label:"Dashboard",
      icon:DashboardIcon
    },
    DashboardConfig:{
      label:"Configurações",
      icon:DashboardConfig
    },
    DashboardCreatePartner:{
      label:"Novo parceiro",
      icon:DashboardCreatePartners
    },
    DashboardBlog:{
      label:"Novidades",
      icon:DashboardBlogIcon
    },
    DashboardSupport:{
      label:"Central do usuário",
      icon:DashboardSupportIcon
    }
  }

  const routes = props.state.routeNames.map( route => {

    const imagePath = menuIcons[route].icon as ImageSourcePropType;
    return (
        <MenuItem key={route} onPress={()=>navigation.navigate("Dashboard",{screen:route})} style={{flexDirection:"row",gap:8,alignItems:"center"}}>
           <Image source={imagePath} style={{width:32,height:32,objectFit:"contain"}}/> 
          <Typography model="body" size="x1">{menuIcons[route].label}</Typography>
        </MenuItem> 
      )
    })
    
    return(
      <MenuWrapper>
          <MenuHeader>
            <MenuAppIcon source={require("assets/images/logo_alternative.png")}/>
          </MenuHeader>
          <ScrollView>
            {routes}
          </ScrollView>
      </MenuWrapper> 
    )
}