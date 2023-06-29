import { DrawerHeaderProps } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { Typography } from "../../../components/Typography/Typography";
import { routesDashboardToLabel } from "../../../helpers";
import { HeaderDashboardImage, HeaderDashboardWrapper } from "./HeaderDashboardStyle";

export function HeaderDashboard  ({route}:DrawerHeaderProps) 
{

  const navigation = useNavigation();

  return(
    <HeaderDashboardWrapper style={{elevation:5}}> 
      <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
        <HeaderDashboardImage source={require("../../../assets/images/menu.png")}/> 
      </TouchableOpacity>
      <Typography model="body" size="x1">{routesDashboardToLabel[route.name].label}</Typography>
    </HeaderDashboardWrapper>
  )
}