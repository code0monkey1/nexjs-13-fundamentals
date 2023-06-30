export async function GET(request){

  return new Response("Hello World !")
}


export async function POST(request){

     console.log(request.body)  

     return new Response("Done")
}  