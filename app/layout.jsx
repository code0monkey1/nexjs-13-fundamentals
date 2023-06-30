// import '@styles/globals.css'

export const metadata = {
  title: 'Next.js Fundamentals',
  description: 'Fundamentals of Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
