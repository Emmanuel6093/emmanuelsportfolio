import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {MdExpandMore} from 'react-icons/md'

import budgetTracker from '../public/assets/portfolio/budgetTracker.jpg'
import searchBooks from '../public/assets/portfolio/searchBooks.jpg'
import techBlog from '../public/assets/portfolio/techBlog.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1, 
            title: 'budget tracker', 
            imageSrc: budgetTracker,
            url: 'https://emmanuel-budget-tracker.herokuapp.com/'
        },
        {
            id: 2, 
            title: 'google search book', 
            imageSrc: searchBooks,
            url: 'https://emmanuel-googlebooks.herokuapp.com/'
        },
        {
            id: 3, 
            title: 'tech blog', 
            imageSrc: techBlog,
            url: 'https://obscure-lowlands-04499.herokuapp.com/'
        }, 
    ]

  return (
    <div id='portfolio' className='w-full'>
        <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
            <h2 className='text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold'>portfolio</h2>
            <p className='py-4 max-w-lg'>Here is some of my work:</p>

            <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8'>

               {portfolios.map(({id, title, imageSrc, url}) => (

                    <Link key={id} href={`/portfolio/${url}`}>
                        
                        <div className='cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md'>
                            <Image src={imageSrc} 
                            alt={title} 
                            className='rounded-md duration-200 hover:scale-110' 
                            />

                            <h2 className='text-center text-base capitalize my-4 font-light'></h2>
                        </div>

                    </Link>
               ))}

            </div>
        </div>
    </div>
  )
}

export default Portfolio