"use client"

// The form for filling out the prompt
import Form from '@components/Form'

//used to get the current logged in client details
import { useSession } from 'next-auth/react'


import { useRouter } from 'next/navigation'
import { useState } from "react"

 /* The `CreatePrompt` component is a React component that is responsible for rendering a form for
filling out a prompt. It uses the `useState` hook to manage the state of the form inputs
(`prompt` and `tag`). It also uses the `useSession` hook from the `next-auth/react` library to
get the current logged in client details. The `CreatePrompt` function is currently empty and
needs to be implemented to handle the form submission. */

const CreatePrompt=()=>{

  const [submitting, setSubmitting] = useState(false)
  
  const [post, setPost] = useState({
    prompt:'',
    tag:''
  })


  const createPrompt=async(e)=>{

      

  }

     return<>
       
       <Form
         type="Create"  
         post={post}
         setPost={setPost}
         submitting={submitting}
         handleSubmit={createPrompt}
       
       />
     
     </>
}

export default CreatePrompt