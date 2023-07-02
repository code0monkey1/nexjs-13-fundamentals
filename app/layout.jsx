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
      </div>
      <main className='app'>
        {children}
      </main>

    </body>
    </html>
  )
}

export default RootLayout