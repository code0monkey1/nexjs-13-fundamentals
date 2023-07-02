'use client'

import Image from "next/image"
import Link from "next/link"

import { getProviders, signIn, signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">

      <Link href='/' className="flex gap-2 flex-center">
        <Image src='/assets/images/logo.svg'/>
      </Link>
    </nav>
  )
}

export default Nav