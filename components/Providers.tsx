"use client"

import { SessionProvider } from 'next-auth/react'
import { ScriptProps } from 'next/script'
import React from 'react'

const Providers = ({children}:ScriptProps) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default Providers