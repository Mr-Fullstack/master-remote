import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator} from '@react-navigation/drawer';
import { MenuDashboard } from "../dashboard/components/MenuDashboard/MenuDashboard";
import { DashboardHome } from "../dashboard/pages/Home/DashboardHome";
import { DashboardConfig } from "../dashboard/pages/Config/DashboardConfig";
import { DashboardPartnerList } from "../dashboard/pages/Partners/DashboardPartnerList";
import { DashboardCreatePartner } from "../dashboard/pages/CreatePartner/DashboardCreatePartner";
import { PageSignin } from "../PageSignin/PageSignin";
import { PageSignup } from "../PageSignup/PageSignup";
import { PagePassword } from "../PagePassword/PagePassword";

import DashboardSupport from "dashboard/pages/Support/DashboardSupport";
import { HeaderDashboard } from "dashboard/components/HeaderDashboard/HeaderDashboard";
import { Blog } from "../Blog/Blog";
import { useApp } from "../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const RootStack = createNativeStackNavigator<RouterStackRoutes>();;
const DashboardDrawer = createDrawerNavigator<DashboardRoutes>();

function DashboardStackDrawer() {

  return (
        <DashboardDrawer.Navigator drawerContent={ props =><MenuDashboard {...props}/>}
        initialRouteName='DashboardHome' 
          screenOptions={
            {
              headerShown:true, 
              header:(props)=> (<HeaderDashboard {...props}/>
              ),
            }
          }
        >
        <DashboardDrawer.Screen name="DashboardHome" component={DashboardHome}/>
        <DashboardDrawer.Screen name="DashboardPartners" component={DashboardPartnerList} />
        <DashboardDrawer.Screen name="DashboardCreatePartner" component={DashboardCreatePartner} />
        <DashboardDrawer.Screen name="DashboardConfig" component={DashboardConfig} />
        <DashboardDrawer.Screen name="DashboardBlog" component={Blog} />
        <DashboardDrawer.Screen name="DashboardSupport" component={DashboardSupport} />
       
    </DashboardDrawer.Navigator>
  );
}

const RouterRoot = () => {

  const {user} = useApp();

  return(
    <RootStack.Navigator screenOptions={{headerShown:false}}>
 
     { !user ?  
        <>
          <RootStack.Screen name="Signin" component={PageSignin} />
          <RootStack.Screen name="Signup" component={PageSignup} />
          <RootStack.Screen name="Password" component={PagePassword} /> 
        </> : <RootStack.Screen name="Dashboard" component={DashboardStackDrawer}  />
     }  
    </RootStack.Navigator>
  )
}

export default RouterRoot;
