'use client'

// used for image optimization
import Image from "next/image"

// used for moving from one page to another
import Link from "next/link"

//used for oAuth ( natively present in next.js)
import { getProviders, signIn, signOut, useSession } from 'next-auth/react'

import { useEffect, useState } from 'react'

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">

      <Link href='/' className="flex gap-2 flex-center">
        <Image 
        
        // the src `/` directly points to the public folder , so
        // /assets === public/assets/...

        src='/assets/images/logo.svg'
        alt="logo"
        width={30}
        height={30}
        className="object-contain"/>
        <p className="logo_text">PROMPTOPIA</p>
      </Link>

      { /*mobile nav */
        <div className="sm:flex hidden">
           {
            isUserLoggedIn? 
                  <div>
                    
                  </div>
                  :
                  <>
                  </>
           }
        </div>
        }
    </nav>
  )
}

export default Nav