import React from 'react'
import Header from '@/app/dashboard/Header';
import { UserContextProvider } from '@/context/context';


const layout = ({children}: {
    children: React.ReactNode
  }) => {
  

  return (
    <div>
      <UserContextProvider>
      
      <div><Header /></div>
     {children}
     </UserContextProvider>
    </div>
  )
}

export default layout