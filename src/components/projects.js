import React from 'react';
import {projects} from '../data';

export default function Projects() {
    return (
        <section id="projects" className='my-5'>
            <div className='flex flex-wrap justify-center shadow-xl'>
                {projects.map((projects) => (
                <div className='md:w-1/3 lg:w-1/2 p-4'>
                    <div className='bg-gray-600 rounded-lg shadow-lg p-3'>
                        <h3 className='text-xl text-white font-bold'>{projects.name}</h3>
                        <p className='text-white shadow-md'>{projects.description}</p>
                        <a href={projects.link} id="button" class="button" className='text-blue-500 inline-block hover:text-blue-400 mt-4 p-5 m-5'>View Project</a>
                        <img
                            alt="gallery"
                            className="rounded shadow-md"
                            src={projects.image}
                        />
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}
