import React from 'react';

export default function Contact() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    function handleSubmit(e) {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
            
    }

    return (
        <section id="contact" className='my-5'>
            <div className=''>
                <div className='w-1 md:w-1/2 lg:w-1/2 p-10 justify-center'>
                    <div className='bg-gray-400 p-6 justify-center'>
                        <h3 className='text-xl text-white font-bold'>Contact Me</h3>
                        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                            <p className='text-l text-white font-bold p-2 m-2'>
                                <label>Your Name: <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} /></label>
                            </p>
                            <p className='text-l text-white font-bold p-2 m-2'>
                                <label>Your Email: <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} /></label>
                            </p>
                            <p className='text-l text-white font-bold p-2 m-2'>
                                <label>Message: <textarea name="message" value={message} onChange={e => setMessage(e.target.value)} /></label>
                            </p>
                            <p id="send" className=''>
                                <button type="submit">Send</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}


    