"use client"

import { UserContext } from '@/context/context'
import React, { useContext } from 'react'


const page = () => {
  const { session } = useContext(UserContext);
  return (
    <div>page</div>
  )
}

export default page