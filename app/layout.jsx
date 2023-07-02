import '@styles/globals.css'

export const metadata={
  title:"Next Demo",
  description:"Learning the basics of Next.js"
}

const RootLayout = ({children}) => {
  return (<>
    <div>layout</div>
    <div>{children}</div>
    </>
  )
}

export default RootLayout