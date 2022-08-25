import React from 'react'

import html from '../public/assets/experience/html.png';
import css from '../public/assets/experience/css.png';
import github from '../public/assets/experience/github.png';
import graphql from '../public/assets/experience/graphql.png';
import javascript from '../public/assets/experience/javascript.png';
import nextjs from '../public/assets/experience/nextjs.png';
import node from '../public/assets/experience/node.png';
import tailwind from '../public/assets/experience/tailwind.png';
import reactImage from '../public/assets/experience/react.png';

const Experience = () => {

    const experiences = [
        {
            id: 1, 
            title: 'HTML', 
            src: html
        },
        {
            id: 2, 
            title: 'CSS', 
            src: css
        },
        {
            id: 3, 
            title: 'GitHub', 
            src: github
        },
        {
            id: 4, 
            title: 'GraphQl', 
            src: graphql
        },
        {
            id: 5, 
            title: 'JavaScript', 
            src: javascript
        },
        {
            id: 6, 
            title: 'NextJs', 
            src: nextjs
        },
        {
            id: 7, 
            title: 'Node', 
            src: node
        },
        {
            id: 8, 
            title: 'Tailwind', 
            src: tailwind
        },
        {
            id: 9, 
            title: 'React', 
            src: reactImage
        },
    ] 


  return (
    <div id='experience' className='w-full'>
   <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          experience
        </h2>
        <p className="py-4 max-w-lg">
            Here are some of the technologies I've used:
        </p>
        
        <div className='grid lg:grid-cols-4 gap-8'>

            {
                experiences.map(({id, title, src}) => (
                  
                    <div key={id} className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'></div>

                ))
            }

        </div>
        </div>
    </div>
  )
}

export default Experience