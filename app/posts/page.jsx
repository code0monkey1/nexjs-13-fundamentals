import React from 'react'

const page = () => {
    const posts=[
    {
      id:1,
      content:"hello",
      important:true
    }
       
    ]
  return (
    <div>page</div>
  )
}

export default page


const Post=({id,content,important})=>{

     <div key={id}>

         <h1>{content}</h1>
         <input type='checkbox' checked={important}/>
     </div>
     
}