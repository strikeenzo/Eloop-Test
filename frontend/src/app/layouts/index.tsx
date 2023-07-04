import React from 'react'

import Header from './Header'
import { useAppSelector } from '../store/hooks'
import { selectLoading } from '../store/modules/home'
import Loader from '../components/Loader'

const Layout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const loading = useAppSelector(selectLoading)
  return (
    <div className='relative'>
      <Header />
      {loading && (
        <div className='absolute top-0 left-0 w-full h-[100vh] flex justify-center items-center bg-black/[0.5] z-20'>
          <Loader />
        </div>
      )}
      <div className='container mx-auto mt-20 relative'>{children}</div>
    </div>
  )
}

export default Layout
