import React from 'react';

export default function Navbars() {
    return (
        <nav className='flex flex-col bg-gray-400 top-0 z-10 text-white justify-right md:sticky md:mr-auto md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center' role='navigation'>
            <a href='#' className='pl-8'>
                <h1 className='text-2xl'>Aidan Reynolds</h1>
            </a>
            <div className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-700'>
                <a href='#about' className='p-4'>About</a>
                <a href='#skills' className='p-4'>Skills</a>
                <a href='#projects' className='p-4'>Projects</a>
                <a href='#resume' className='p-4'>Resume</a>
                <a href='#contact' className='p-4'>Contact</a>
            </div>
        </nav>
    )
}