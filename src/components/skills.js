import React from 'react';
import {skills} from '../utils/data';

export default function Skills() {
    return (
        <section id="skills" className=' bg-gray-600 shadow-lg p-3 text-white'>
            <h1 className='text-2xl text-white font-bold bg-gray-600 m-5'>Skills</h1>
            <div className='flex flex-wrap rounded'>
                    {skills.map((skills) => (   
                    <div key={skills.id} className='md:w-1/3 lg:w-1/2 p-2 shadow-xl rounded'>
                        <div className='bg-gray-400 p-2 m-2 shadow-lg rounded'>
                            <h3 className='text-xl text-white font-bold m-5'>{skills.name}</h3>
                            <p className='text-white'>{skills.description}</p>
                        </div>
                    </div>
                    ))}
            </div>
        </section>
    )
}
