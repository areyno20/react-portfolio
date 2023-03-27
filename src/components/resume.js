import React from 'react';
import resumeFile from '../files/myresume.pdf';

export default function Resume() {
    return (
        <section id="resume" className='my-5'>
            <div className='justify-center shadow-xl  p-4'>
            <object data={resumeFile} type="application/pdf" width="100%" height="500px" className="">
                <p>Your web browser doesn't have a PDF plugin.
                Instead you can <a href={resumeFile}>click here to
                download the PDF file.</a></p>
            </object>
            </div>
        </section>
      );
};

