'use client'

import { useEffect, useState } from 'react'

const Feed = () => {
  return (
    <section className='feed'>
        <form className='relative w-full flex-center'>
          <input
           placeholder='Search for a Tag or a UserName'
           value={searchText}
          />
        </form>
      </section>
  )
}

export default Feed