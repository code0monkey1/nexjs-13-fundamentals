import '@styles/globals.css';
import navbar from './navbar';

export const metadata = {
  title: 'Next.js Fundamentals',
  description: 'Fundamentals of Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <div className='main'>
        <navbar/>
        <div className="gradient"/>
      </div>
      <main className='app'>
        
        {children}

      </main>
    </html>
  ) 
}
