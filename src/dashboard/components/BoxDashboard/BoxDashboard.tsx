import React, { PropsWithChildren } from 'react';
import { BoxDashboardWrapper,BoxDashboardTitle } from './BoxDashboardStyles';


interface BoxDashboardProps extends PropsWithChildren{
  title:string;
}
export function BoxDashboard({title,children,...props}: BoxDashboardProps) {
  return (

    <BoxDashboardWrapper style={{elevation:2}} {...props}>
      <BoxDashboardTitle  model="heading" size='x2'>
        {title}
      </BoxDashboardTitle>
      {children}
    </BoxDashboardWrapper>
    
  )
}