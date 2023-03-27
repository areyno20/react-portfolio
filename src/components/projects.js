import React from 'react';

export default function Projects() {
    return (
        <section id="projects" className='my-5'>
            <div className='flex flex-wrap justify-center'>
                <div className='w-1/2 md:w-1/3 lg:w-1/2 p-4'>
                    <div className='bg-gray-600 rounded-lg shadow-lg p-3'>
                        <h3 className='text-xl text-white font-bold'>Stocktistics</h3>
                        <p className='text-white'>Our objective is to make it easier for people to receive stock information through our app. With our simplistic design and chart data you will be able to look up any stock you please with the stock symbol of your choosing. Other websites will make it difficult to follow the data unless you are familiar with stock information, our website allows for anyone to access basic stock information without being bombarded with complex stock data. Stocktistics lays out the information in a linear fashion so you are able to easily follow all the data presented.</p>
                        <a href='https://stocktistics.herokuapp.com/login' id="button" class="button" className='text-blue-500 inline-block hover:text-blue-400 mt-4 p-5 m-5'>View Project</a>
                        <img
                            alt="gallery"
                            className=""
                            src={require('../images/stockgraph.png')}
                        />
                    </div>
                </div>
                <div className='w-1/2 md:w-1/3 lg:w-1/2 p-4'>
                    <div className='bg-gray-600 rounded-lg shadow-lg p-3'>
                        <h3 className='text-xl text-white font-bold'>Fresh Bakery</h3>
                        <p className='text-white'>Our imaginery bakery has four products which the customer can select; the system will then use the imformation that the customer provides to display the cost of the products, the total cost of teheir order, time till their order is ready and the distance between the store and their location.</p>
                        <a href='https://areyno20.github.io/Fresh-Bakery/' id="button" class="button" className='text-blue-500 inline-block hover:text-blue-400 mt-4 p-5 m-5'>View Project</a>
                        <img
                            alt="gallery"
                            className=""
                            src={require('../images/bakery.png')}
                        />
                    </div>
                </div>
                <div className='w-1/2 md:w-1/3 lg:w-1/2 p-4'>
                    <div className='bg-gray-600 rounded-lg shadow-lg p-3'>
                        <h3 className='text-xl text-white font-bold'>Social Network API</h3>
                        <p className='text-white'>This is an API that is created for a social network. It allows users to share their thoughts, add friends, react to others thoughts and update their information. It uses MongoDB to contain the information in the database and express.js for routing, as well as insomnia doing the seeding of the data.</p>
                        <a href='https://github.com/areyno20/Social-Network-API' id="button" class="button" className='text-blue-500 inline-block hover:text-blue-400 mt-4 p-5 m-5'>View Project</a>
                        <img
                            alt="gallery"
                            className=""
                            src={require('../images/social.png')}
                        />
                    </div>
                </div>
                <div className='w-1/2 md:w-1/3 lg:w-1/2 p-4'>
                    <div className='bg-gray-600 rounded-lg shadow-lg p-3'>
                        <h3 className='text-xl text-white font-bold'>Text Editor</h3>
                        <p className='text-white'>This application is a simple text editor that can be used offline. It uses an existing text editor applicatio but adds certain funcionalities that were not present prior.</p>
                        <a href='https://just-another-text-editor.herokuapp.com/' id="button" class="button" className='text-blue-500 inline-block hover:text-blue-400 mt-4 p-5 m-5'>View Project</a>
                        <img
                            alt="gallery"
                            className=""
                            src={require('../images/JATE.png')}
                        />
                    </div>
                </div>
                <div className='w-1/2 md:w-1/3 lg:w-1/2 p-4'>
                    <div className='bg-gray-600 rounded-lg shadow-lg p-3'>
                        <h3 className='text-xl text-white font-bold'>README Generator</h3>
                        <p className='text-white'>When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.</p>
                        <a href='https://github.com/areyno20/README-Generator' id="button" class="button" className='text-blue-500 inline-block hover:text-blue-400 mt-4 p-5 m-5'>View Project</a>
                        <img
                            alt="gallery"
                            className=""
                            src={require('../images/readmegen.png')}
                        />
                    </div>
                </div>
                <div className='w-1/2 md:w-1/3 lg:w-1/2 p-4'>
                    <div className='bg-gray-600 rounded-lg shadow-lg p-3'>
                        <h3 className='text-xl text-white font-bold'>Note Taker</h3>
                        <p className='text-white'>This project is a note taker application that can write and save notes for you. This application uses express.js for back end development and will save all notes and retrieve them from a JSON file. This application will also be deployed with Heroku.</p>
                        <a href='https://github.com/areyno20/Note-Taker' id="button" class="button" className='text-blue-500 inline-block hover:text-blue-400 mt-4 p-5 m-5'>View Project</a>
                        <img
                            alt="gallery"
                            className=""
                            src={require('../images/notes.png')}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
