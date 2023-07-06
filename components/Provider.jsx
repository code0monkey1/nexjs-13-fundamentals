import { SessionProvider } from 'next-auth/react'
import React from 'react'

'use client'

const Provider = ({children,session}) => {
  return (
    <SessionProvider session={session}> 
       {children}
    </SessionProvider>
  )
}

export default Provider