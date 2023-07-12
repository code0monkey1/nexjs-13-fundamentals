'use client'

import { useEffect, useState } from 'react';

import PromptCard from './PromptCard';


const PromptCardList =({data,handleTagClick})=>{

}
const Feed = () => {
   
    const[searchText,setSearchText] = useState('')

    const handleSearchChange=({target})=>{
        
       setSearchText(target.value)
    }
   
    console.log(searchText)
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
        <PromptCardList data={[]} handleTagClick={()=>{}}/>
      </section>
  )
}

export default Feed