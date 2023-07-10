"use client"

// The form for filling out the prompt
import Form from '@components/Form'

//used to get the current logged in client details
import { useSession } from 'next-auth/react'


import { useRouter } from 'next/navigation'
import { useState } from "react"

const CreatePrompt=()=>{

  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState(second)

     return<>
       
       <h1>Prompt</h1>
     
     </>
}

export default CreatePrompt