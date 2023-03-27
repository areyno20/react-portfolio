import React from 'react';

export default function Navbars() {
    return (
        <nav className='bg-gray-400 top-0 z-10 text-white justify-right' role='navigation'>
            <a href='https://areynolds.net' className='pl-8'>
                <h1 className='text-2xl'>Aidan Reynolds</h1>
            </a>
            <div className='pr-8 md:block hidden'>
                <a href='#about' className='p-4'>About</a>
                <a href='#skills' className='p-4'>Skills</a>
                <a href='#projects' className='p-4'>Projects</a>
                <a href='#contact' className='p-4'>Contact</a>
            </div>
        </nav>
    )
}