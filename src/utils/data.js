import bakery from '../images/bakery.png';
import social from '../images/social.png';
import JATE from '../images/JATE.png';
import earthify from '../images/earthify.png';
import notes from '../images/notes.png';
import stockgraph from '../images/stockgraph.png';

export const projects = [
    {
        id: '1',
        name: 'Stocktistics',
        description: 'This is a stock market application that allows the user to view the current stock prices of the top 100 companies. It uses the IEX Cloud API to get the stock data and then displays it on the page.',
        image: stockgraph,
        link: 'https://areyno20.github.io/Stocktistics/'
    },
    {
        id: '2',
        name: 'Bakery',
        description: 'This is a bakery website that is created using HTML, CSS, and JavaScript. It is a simple website that allows the user to view the bakerys products and services.',
        image: bakery,
        link: 'https://areyno20.github.io/Fresh-Bakery/'
    },
    {
        id: '3',
        name: 'Earthify',
        description: 'This is a carbon footprint calculator that allows the user to calculate their carbon footprint. It uses user input and then calculates the users carbon footprint based on the data. It uses React, Javascript, GraphQL, and MongoDB. ',
        image: earthify,
        link: 'https://the-manhattan-project.herokuapp.com/'
    },
    {
        id: '4',
        name: 'Social Network API',
        description: 'This is an API that is created for a social network. It allows users to share their thoughts, add friends, react to others thoughts and update their information. It uses MongoDB to contain the information in the database and express.js for routing, as well as insomnia doing the seeding of the data.',
        image: social,
        link: 'https://github.com/areyno20/Social-Network-API'
    },
    {
        id: '5',
        name: 'Text Editor',
        description: 'This application is a simple text editor that can be used offline. It uses an existing text editor application but adds certain funcionalities that were not present prior.',
        image: JATE,
        link: 'https://just-another-text-editor.herokuapp.com/'
    },
    {
        id: '6',
        name: 'Note Taker',
        description: 'This is a simple note taker application that allows the user to create, save, and delete notes. It uses express.js for routing and MongoDB for the database.',
        image: notes,
        link: 'https://github.com/areyno20/Note-Taker'
    },
]

export const skills = [
    {
        id: '1',
        name: 'HTML',
        description: 'HTML is the standard markup language for creating Web pages. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
    },
    {
        id: '2',
        name: 'CSS',
        description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
    },
    {
        id: '3',
        name: 'JavaScript',
        description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
    },
    {
        id: '4',
        name: 'React',
        description: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.'
    },
    {
        id: '5',
        name: 'Node.js',
        description: 'Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.'
    },
    {
        id: '6',
        name: 'Express.js',
        description: 'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.'
    },
    { 
        id: '7',
        name: 'MongoDB',
        description: 'MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.'
    },
    {
        id: '8',
        name: 'MySQL',
        description: 'MySQL is an open-source relational database management system (RDBMS). Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.'
    },
    {
        id: '9',
        name: 'Git',
        description: 'Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.'
    },
    {
        id: '10',
        name: 'GitHub',
        description: 'GitHub is a web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features.'
    },
    {
        id: '11',
        name: 'Heroku',
        description: 'Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud. Heroku is a polyglot platform, supporting several programming languages.'
    },
    {
        id: '12',
        name: 'Bootstrap',
        description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.'
    },
    {
        id: '13',
        name: 'jQuery',
        description: 'jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License.'
    }
]