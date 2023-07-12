import Link from "next/link";

const Form=({
   post,
   type,
   setPost,
   submitting,
   handleSubmit
})=>{

   return(
   
      <section className="w-full max-w-full flex-start flex-col">
       
            <Heading type={type}/>

            <form
               onSubmit={handleSubmit}
               className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
            
               <PromptInput post={post}  setPost={setPost} />

               <TagInput post={post} setPost={setPost}/>

               <Submit_Cancel submitting={submitting} type={type}/>

            </form>
            
      </section>
   )
}

export default Form;


const Heading=({type})=>{

   return(<>

     <h1 className="head_text text-left">
             
             <span className="blue_gradient">{type} Post</span>

          </h1>

          <p className="desc text-left max-w-md">
              {type} and share amazing prompts with the world
          </p>

   
   </>)
}

const TagInput=({post, setPost})=> {

   return ( 
         <label>

            <span className="font-satoshi font-semibold text-base text-gray-700">
               Tag{' '} <span className="font-normal">( #code , #system-design , #idea )</span>
            </span>

            <input

               value={post.tag}

               onChange={(e) => {
                  setPost({
                     ...post,
                     tag: e.target.value
                  });
               } }
               placeholder="#tag"
               required
               className="form_input" />

        </label>
      )
}


const Submit_Cancel=({submitting, type}) =>{


   return <div className="flex-end mx-3 mb-5 gap-4">

      <Link href='/' className="text-grey-500 text-sm">
         Cancel
      </Link>

      <button
         type="submit"
         disabled={submitting}
         className="px-5 py-1.5 rounded-full text-sm bg-primary-orange text-white"
      >
         {submitting ? `${type}...` : `${type}`}
      </button>

   </div>;
}

const PromptInput =({post, setPost})=>{

   return <label>

      <span className="font-satoshi font-semibold text-base text-gray-700">
         Your A.I Prompt to make you work less
      </span>

      <textarea

         value={post.prompt}

         onChange={(e) => {
            setPost({
               ...post,
               prompt: e.target.value
            });
         } }
         placeholder="Write your prompt here..."
         required
         className="form_textarea" />


   </label>;
}

