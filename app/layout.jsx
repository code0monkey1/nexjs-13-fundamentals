import '@styles/globals.css'

export const metadata={
  title:"Next Demo",
  description:"Learning the basics of Next.js"
}

const RootLayout = ({children}) => {
  return (
  <html lang='en'>
    <body>
      <div className='main'>
      <div className='gradient'/>
      <main className='app'>
        {children}
      </main>
      </div>
    </body>
    </html>
  )
}

export default RootLayout