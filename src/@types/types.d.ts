
type DashboardRoutes = {
  DashboardPartners: undefined;
  DashboardHome:undefined;
  DashboardConfig:undefined;
  DashboardCreatePartner:undefined;
  DashboardBlog:undefined;
  DashboardSupport:undefined;
};

type RouterStackRoutes = {
  Dashboard:{
    screen:NavigatorScreenParams<DashboardRoutes>;
  }
  Signin: undefined;
  Signup: undefined;
  Password:undefined;
};

type MenuDashboardIcons = {
  label:string;
  icon:string;
}

