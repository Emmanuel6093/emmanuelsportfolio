import React from 'react'

import {MdExpandMore} from 'react-icons/md'

import budgetTracker from '../public/assets/portfolio/budgetTracker.jpg'
import searchBooks from '../public/assets/portfolio/searchBooks.jpg'
import techBlog from '../public/assets/portfolio/techBlog.jpg'

const Portfolio = () => {
  return (
    <div id='portfolio' className='w-full'>
        <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
            <h2 className='text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold'>portfolio</h2>
            <p className='py-4 max-w-lg'>Here is some of my work:</p>
        </div>
    </div>
  )
}

export default Portfolio