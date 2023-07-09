import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <div className='bg-[url("https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")] bg-blend-multiply bg-cover bg-center bg-black/80'>
            <div className=' p-20 '>
            <h1 className=' font-thin'>WELCOME TO MY WORLD</h1>
            <h1 className=' text-4xl font-bold font-serif my-2'>Shammim Ahmed Asadullah</h1>
            <h1 className=' text-4xl mt-10'>
                I am {' '}
                <span className=' uppercase text-[#0361D1] font-bold'>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['React Developer','Front END Developer', 'Web Designer', 'Wordpress Customizer', 'mern stack developer']}
                        loop={20}
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={3000}
                        onLoopDone={handleDone}
                    />
                </span>
            </h1>
        </div>
        </div>
    );
};

export default Banner;