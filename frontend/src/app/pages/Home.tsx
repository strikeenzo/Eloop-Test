import React, { useEffect } from 'react'
import SearchFormInput from '../components/SearchFormInput'
import BlogItem from '../components/BlogItem'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getData, selectScrappingData } from '../store/modules/home'

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const scrappingData = useAppSelector(selectScrappingData)

  const handleGetData = (url: string) => {
    dispatch(getData(url))
  }

  return (
    <div className='container'>
      <SearchFormInput getData={handleGetData} />
      {scrappingData.title && (
        <div className='grid grid-cols-4'>
          <div className='col-span-4 md:col-span-1 p-[30px]'>
            <img src={scrappingData.imgUrl} alt='' className='rounded-full' />
            <h2 className='mt-5 text-[20px] font-medium'>{scrappingData.title}</h2>
            <p className='text-[16px] mt-2'>{scrappingData.follower}</p>
            <p className='text-[11px] mt-2'>{scrappingData.description}</p>
          </div>
          <div className='col-span-4 md:col-span-3 p-[30px]'>
            <h1 className='mt-5 text-[40px] font-medium'>{scrappingData.title}</h1>
            {scrappingData.articles.map((item, index) => {
              return <BlogItem article={item} key={index} />
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
