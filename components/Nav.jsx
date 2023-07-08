'use client'

// used for image optimization
import Image from "next/image"

// used for moving from one page to another
import Link from "next/link"

//used for oAuth ( natively present in next.js)
import { getProviders, signIn, signOut, useSession } from 'next-auth/react'

import { useEffect, useState } from 'react'

const Nav = () => {

  const {data:session} = useSession()

  const isUserLoggedIn = session?.user;

  const [providers,setProviders] =useState(null)

  const [toggleDropdown,setToggleDropdown] = useState(true)

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

      { /*desktop nave  first component */ }
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

                      <button
                       type="button"
                       key={provider.name}
                       onClick={()=>signIn(provider.id)}
                       className="black_btn"
                       > 
                        SignIn
                      </button>
                    ))
                  }
                  </>
                       
           }
        </div> 
            {/* Mobile View Nav*/}
            
          <div className="sm:hidden flex relative">
            {
               isUserLoggedIn? 
                  <div className="flex">

                        <Image 
                        src='/assets/images/logo.svg'
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt='profile'
                        onClick={()=>toggleDropdown(prev => !prev)}
                        />
                    
                      {
                      toggleDropdown &&
                        <div className="dropdown">
                          <Link  
                          href='/profile'
                          className="dropdown_link"
                          onClick={()=>(setToggleDropdown(false))}
                          >
                          My Profile
                          </Link>
                        <Link href='/create-prompt' className="dropdown_link"
                        onClick={()=>{setToggleDropdown(false)}}>
                        Create Prompt
                        </Link>
                         <button type='button' 
                        onClick={()=>{
                          setToggleDropdown(false);
                          signOut()
                        }}
                        className='mt-5 w-full black_btn'
                        >
                        Sign Out
                        </button> 
                        </div>
                      
                      }
                  </div>
                  
                  :
                  <>
                   {
                    providers && 
                    Object
                    .values(providers)
                    .map((provider) =>(

                      <button
                       type="button"
                       key={provider.name}
                       onClick={()=>{}}
                       className="black_btn"
                       > 
                        SignIn
                      </button>
                    ))
                  }
                  </>
        
        }
        </div>
    </nav>
  )
}

export default Nav