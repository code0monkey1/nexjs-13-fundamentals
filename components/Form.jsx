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

          <h1 className="head_text text-left">
             
             <span className="blue_gradient">{type} Post</span>

          </h1>
         
      </section>
   )
}

export default Form;