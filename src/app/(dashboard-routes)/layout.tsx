import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'


interface PrivateLayoutProps {
  children: ReactNode
}

export default async function PrivateLayout({children} : PrivateLayoutProps) {
  const session = await auth()
  if (!session) {
   return redirect('/')
  } 
  
  return <>{children}</>
}


