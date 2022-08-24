import React from 'react'
import heroImage from '../public/assets/heroImage.png'
import {MdExpandMore} from 'react-icons/md'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div id='home' className='h-screen w-full text-center'>
      <div className='max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center'>
          <div className='w-64 h-64 mx-auto overflow-hidden rounded-xl'>
            <Image src={heroImage} alt='me' />
          </div>

          <h1 className='uppercase font-bold text-gray-700 text-7xl'>
            full stack developer
          </h1>

          <p className='text-gray-600 text-xl max-w-sm mx-auto'>
            I have 1 year of experience of building and designing web applications. Currently, I love to work on web applications using technologies like React, Tailwind, and Next JS. 
          </p>

      </div>
    </div>
  )
}

export default HomePage