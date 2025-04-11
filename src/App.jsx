import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Loader from './components/Loader'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <div className='min-h-screen dark:bg-gray-900 bg-white text-red-500 dark:text-yellow-500 transition-colors duration-300'>
        <Loader isLoading={isLoading}></Loader>
        {!isLoading && (
          <>
            <Hero></Hero>
            <Services></Services>
            <Contact></Contact>
          </>
        )}
      </div>
    </ThemeProvider>
  )
}

export default App