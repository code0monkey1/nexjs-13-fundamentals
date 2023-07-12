'use client'

import { useEffect, useState } from 'react'

const Feed = () => {
   
    const[searchText,setSearchText] = useState('')

    const handleSearchChange=({target})=>{

        setSearchText(target.value)
    }

  return (
    <section className='feed'>
        <form className='relative w-full flex-center'>
          <input
           placeholder='Search for a Tag or a UserName'
           value={searchText}
           onChange={handleSearchChange}
           required
           className='search_input peer'
          />
        </form>
      </section>
  )
}

export default Feed