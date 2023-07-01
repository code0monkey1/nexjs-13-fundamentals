# Next.js 13 Fundamentals


## Next.js advantages
 1. Simplifies the app dev process
 1. Automatically optimizes the web app through :    
    + Rendering  :   
          - CSR  ( Client Side Rendering : Same as CrateReactApp client )   
          -  SSR  ( First component generated on the server ,then sent to the client for rendering [Good For S.E.O {Easy Crawling and Indexing by web crawlers }] )         
          -  SSG    
          -  ISR ( It re-generates a static site template after specified about of time , so any changes to the data in that time is reflecte , Good for blog posts etc... )
    
    + Creating a new page:

        - Next.js has it's own file based routing system , each folder in the api folder becomes a route , and the folder name , the route path( so you're not dependent on some package like  React Router Dom ).
        - Eg. For creating a new page named `new-page` , jest crate a `new-page folder` and crate a file named `page.jsx` which will have the content to be displayed when we visit `http://localhost:3000/new-page`
       
        - ` Dynamic Page Routing ` - If you want to create a dynamic page using the `:pageId` , for example , then you can do that using the`[postId]` folder (A folder , with the argument name within square brackets) within the `posts` folder .
        - Sharing UI components b/w components of a folder can be achieved by creating a `layout.js` file in the folder and putting common components the same way you put in the main folders layout page
        - You can create a `loading.js` file and an `error.js` ( will have `use client` at the top, as Error components must be client components) file in the Posts folder to handle any loading or error states when posts load or error out. 
          
    + Routing :   
         
        - Api routes , help is handling serverless api requests
        
        - The serverless api architecture of next js frees us from worrying about managing the server infrastructure or  scaling the server on increased demand ( as the serverless functions scale up and down as per demand automatically )
    
    + Automatic Code Splitting :    
        - Code splitting is a technique of splitting large bundles of javascript code to small , more manageable bundles that are loaded in as and when needed .
       
        - Code splitting leads to quicker load times of an app , thereby optimizing the user experience 
        
        - In create react app , you need to manually do the code splitting process


----

Setup : 

+ The `layout` file within the `app` directory is the entry point into the app.

+ Any component you render in the `layout` page will be reflected on every page of the app.

+  The  `page` represents the home page of the application. ( The page that's displayed when the app starts)

+  By default , all components in the `app` folder are server components.

+ If you want to make a page interactive ( i.e using react hooks  , or onClick() , onChange() etc... .i.e Client Side Rendered ) , then render it as client component  by adding `use client` statement at the top of the component page.


---

### Metadata

If you want to change the metadata , you could do it dynamically by : 


---
 
### CSS 
 
- The `globals.css` file contains the global css properties of the entire app. This even has the `tailwind` imports to apply tailwind properties to our app.
 
- It is imported in `layout` file as `import './globals.css'` to be applied to the entire app