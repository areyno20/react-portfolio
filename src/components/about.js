import React from 'react';


export default function About(){

    return(
        <section id="about" className='my-5'>
            <div className='my-10 flex flex-wrap justify-center bg-gray-600 rounded-lg shadow-lg p-3 text-white rounded shadow-lg '>
                <div className='my-32 w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/2 p-4 justify-center rounded'>
                    <div className='bg-gray-400 p-10 rounded'>
                        <h3 className='text-xl text-white font-bold'>About Me</h3>
                        <p className='text-white'>Full Stack Web Developer with a background in Chemistry and high interest in music production. Complete time management skills, dedication and amazing team player. I have very high attention to detail and hold myself to the utmost standard as an individual.</p>
                    </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-5 shadow-lg'>
                    <img className="object-cover object-right rounded"alt="hero" src={require('../images/myface.jpg')}/>
                </div>
            </div>
            <div>
            <h1 className='text-2xl p-2 text-white font-bold bg-gray-600 md:w-1/2 lg:w-1/2 rounded'>Education</h1>
                <div className='my-2 flex flex-wrap justify-left bg-gray-600 rounded-lg shadow-lg p-2 text-white'>
                    <div className='md:w-1/2 lg:w-1/2 p-4 justify-center shadow-lg'>
                        <div className='bg-gray-400 p-3'>
                            <h3 className='text-xl text-white font-bold'>Bishop's University</h3>
                            <p className='text-white'>Bachelor of Science in Chemistry (Honours)</p>
                            <p className='text-white'>Graduated: June 2019</p>
                        </div>
                    </div>
                    <div className='md:w-1/2 lg:w-1/2 p-4 justify-center shadow-lg'>
                        <div className='bg-gray-400 p-3'>
                            <h3 className='text-xl text-white font-bold'>University of Toronto School of Continuing Studies</h3>
                            <p className='text-white'>Full Stack Web Development Bootcamp</p>
                            <p className='text-white'>Graduated: April 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )


}