import React from 'react'
import SearchFormInput from '../components/SearchFormInput'
import BlogItem from '../components/BlogItem'

const Home: React.FC = () => {
  return (
    <div className='container'>
      <SearchFormInput />
      <div>
        <div className='grid grid-cols-4'>
          <div className='col-span-4 md:col-span-1 p-[30px]'>
            <img
              src='https://miro.medium.com/v2/resize:fill:88:88/2*zKQm32tVTw3WQSVYfKpXrA.png'
              alt=''
              className='rounded-full'
            />
            <h2 className='mt-5 text-[20px] font-medium'>ELOOP E-Carsharing</h2>
            <p className='text-[16px] mt-2'>4 Followers</p>
            <p className='text-[11px] mt-2'>
              ELOOP ist ein Start-Up aus Wien das sich auf elektrisches Carsharing, shared economy
              Lösungen und blockchain mobility systeme spezialisiert hat https://eloop.to
            </p>
          </div>
          <div className='col-span-4 md:col-span-3 p-[30px]'>
            <h1 className='mt-5 text-[40px] font-medium'>ELOOP E-Carsharing</h1>
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
