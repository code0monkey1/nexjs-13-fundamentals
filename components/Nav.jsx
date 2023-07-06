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

  const [providers,setProviders] =useState(null)

  useEffect(()=>{

      const setProvider =async()=>{
        
        const response = await getProviders()

        setProviders(response)
        
      }

      setProvider()

  },[])

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

      { /*desktop nave  first component */
        <div className="sm:flex hidden">
           {
            isUserLoggedIn? 
                  <div className="flex gap-3 md:gap-5">

                  {/* Used to create a new post  */}

                  <Link href='/create-prompt' className="black_btn">
                  Create Post
                  </Link>
                  <button type='button' 
                  onClick={signOut}
                  className='outline_btn'
                  >
                  Sign Out
                  </button> 

                {/* We will use this to  show the profile picture of the logged in user  , clicking on which takes us to the profile page of the logged in user */}

                <Link href='/profile'>
                   <Image 
                   src='/assets/images/logo.svg'
                   width={37}
                   height={37}
                   className='rounded-full'
                   alt='profile'
                   />
               
                </Link>
                  </div>
                  :
                  <>
                   {
                    providers && 
                    Object
                    .values(providers)
                    .map((provider) =>(
                      <button> 

                      </button>
                    ))
                  }
                  </>
           }
        </div>
        }
    </nav>
  )
}

export default Nav