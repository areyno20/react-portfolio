import React from 'react';
import resumeFile from '../files/myresume.pdf';

export default function Resume() {
    return (
        <section id="resume" className='my-5'>
            <div className='justify-center shadow-xl  p-4'>
                <div>
                    <embed src={resumeFile} width="100%" height="1000px" />
                </div>
            </div>
        </section>
      );
};

