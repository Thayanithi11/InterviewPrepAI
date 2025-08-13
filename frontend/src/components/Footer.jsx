import React from 'react'
import { assets, footer_data } from '../assets/assets'

function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start justify-between
      gap-10 py-10 border-b border-gray-500/30 bg-gray-100/70 text-gray-500 px-8">

        <div>
            <img src={assets.logo} alt="logo" className='w-32 sm:w-44'/>
            <p className='max-w-[410px] mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, beatae. Veritatis cupiditate iusto animi hic beatae officiis pariatur quam facere libero? Numquam
                 quod repellat, non ad modi accusamus ipsum voluptate?
            </p>
        </div>

        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5 '>
            {
                footer_data.map((section,index)=>(
                    <div key={index}>
                        <h3 className='font-semibold text-base text-gray-900 md:mb-5'>
                        {section.title}</h3>
                        <ul className='text-sm space-y-1'>
                            {section.links.map((link,i)=>(
                                <li key={i}>
                                    <a href="#" className='hover:underline transition'>
                                    {link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>

      </div>
      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>
      Copyright 2025 © QuickBlog - All Right Reserved.</p>
    </div>
  )
}

export default Footer
