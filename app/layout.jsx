import '@styles/globals.css';
import Navbar from './navbar';

export const metadata = {
  title: 'Next.js Fundamentals',
  description: 'Fundamentals of Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <div className='main'>

        <div className="gradient"/>
      </div>

      <main className='app'>
        <Navbar/>
        
        {children}

      </main>
    </html>
  ) 
}
