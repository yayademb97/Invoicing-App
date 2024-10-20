import React from 'react';

export default function Notes(props) {
    const { notes } = props;

    return (
        <>
            <section className="mt-10 mb-5">
                {/* Textarea */}
                <p className='lg:w-1/2 text-justify'>{notes}</p>
            </section>
        </>
    );
}
