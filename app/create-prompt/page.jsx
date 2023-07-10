"use client"

// The form for filling out the prompt
import Form from '@components/Form'

//used to get the current logged in client details
import { useSession } from 'next-auth/react'


import { useRouter } from 'next/navigation'
import { useState } from "react"

// export type Propmt={
//   prompt:string,
//   tag:string
// }
const CreatePrompt=()=>{

  const [submitting, setSubmitting] = useState(false)
  
  const [post, setPost] = useState({
    prompt:string,
    tag:string
  })


  const CreatePrompt=async(e)=>{

  }

     return<>
       
       <Form
       
       />
     
     </>
}

export default CreatePrompt