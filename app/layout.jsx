import Nav from '@components/Nav'
import Provider from '@components/Provider'

import '@styles/globals.css'

export const metadata={
  title:"Next Demo",
  description:"Learning the basics of Next.js"
}

const RootLayout = ({children}) => {
  return (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
         <div className='gradient'/>
        </div>
          <main className='app'>
            
            <Nav/>
            
            {children}

          </main>
     </Provider>
    </body>
    </html>
  )
}

export default RootLayout