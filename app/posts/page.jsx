import React from 'react'

const page = () => {

    const posts=[
    {
      id:1,
      content:"hello",
      important:true
    },
        {
      id:1,
      content:"hello",
      important:true
    }
    ,  {
      id:1,
      content:"hello",
      important:true
    }
       
    ]
  console.log(posts)
  return (
   <>
     {posts?posts.map(p => <Post {...p} />):''}
     </>
   
  )
}

export default page


const Post=({id,content,important})=>{
  
  
  return(
     <div className='border-2 border-black p-2' key={id}>

         <h1>{content}</h1>
         <input type='checkbox' checked={important}/>

     </div>
  )
     
}