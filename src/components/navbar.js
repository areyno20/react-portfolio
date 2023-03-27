import React from 'react';

export default function Navbars() {
    return (
        <nav className='flex flex-col bg-gray-400 top-0 z-10 text-white justify-right md:sticky md:mr-auto md:border-l md:border-gray-700' role='navigation'>
            <h1 className='text-2xl m-5'>Aidan Reynolds</h1>
            <div className='     md:border-gray-700 flex flex-wrap items-center text-base justify-center'>
                <a href='#about' className='p-2'>About</a>
                <a href='#skills' className='p-2'>Skills</a>
                <a href='#projects' className='p-2'>Projects</a>
                <a href='#resume' className='p-2'>Resume</a>
                <a href='#contact' className='p-2'>Contact</a>
            </div>
        </nav>
    )
}