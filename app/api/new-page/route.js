

export async function GET(request){

    const users=[
      {id:1,name:"chinu"},
      {id:2,name:"vonn"},
      {id:3,name:"veronicca"}
    ]

    return new Response(JSON.stringify(users))
}