# Next.js 13 Fundamentals


## Next.js advantages
 1. Simplifies the app dev process
 1. Automatically optimizes the web app through :    
    + Rendering  :   
          - CSR  ( Same as CrateReactApp client)   
          -  SSR  ( First component generated on the server ,then sent to the client for rendering [Good For S.E.O {Easy Crawling and Indexing by web crawlers }] )         
          -  SSG    
          -  ISG
          - 
    + Routing :   
         + Next.js has it's own file based routing system , each folder in the api folder becomes a route , and the folder name , the route path( so you're not dependent on some package like  React Router Dom )

        + Api routes , help is handling serverless api requests
        
        + The serverless api architecture of next js frees us from worrying about scaling the server on increased demand ( as the serverless functions scale up and down as per demand automatically )
