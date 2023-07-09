import React, { useRef } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Lottie from "lottie-react";
import groovyWalkAnimation from "./assets/resume.json";
import LightSpeed from 'react-reveal/LightSpeed';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const About = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    // console.log(errors);

    const form = useRef();

    const sendEmail = (data) => {
        // event.preventDefault();
        const { from_name, Subject, Email, message } = data;
        console.log(data);
  
      emailjs.sendForm('service_i84joel', 'template_8cx5ezb', form.current, 'flyUA_jRXXLjpWFL5')
        .then((result) => {
            console.log(result);
            if (result.text == "OK") {
                toast.success("Thanks for contact, We are feedback early");
            }

        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='my-4' id='about'>
            <ToastContainer />
            <h1 className='text-center my-5 text-[#0F61D1] text-4xl font-serif'>About Me</h1>
            <div className="lg:flex">
                <div className="lg:w-2/6 mx-2">
                    <Lottie className=' relative h-80' animationData={groovyWalkAnimation} loop={true}>
                        {/* <img className=' relative w-44 bottom-60 rounded-full border-4 p-2 border-white mx-auto' src="https://avatars.githubusercontent.com/u/97753630?v=4" alt="" srcset="" /> */}
                    </Lottie>
                    <img className=' relative w-44 bottom-60 rounded-full border-4 p-2 border-white mx-auto' src="https://avatars.githubusercontent.com/u/97753630?v=4" alt="" srcset="" />
                </div>
                <div className="lg:w-4/6 mx-4">
                <LightSpeed left>
                    <p className='my-2'>
                        I can build interactive and dynamic user interfaces for web applications.
                        <p className=' font-serif font-semibold'>
                            I have achieved a complete web development course with Jhankar Mahbub, Programing Hero
                            Course with the highest mark.
                        </p>
                        I am a challenging person and interested in new technology.I expertise this technology HTML5 |
                        CSS3 | JavaScript ES6 | React.js| React BootStrsp |React|Router|MongoDB|JWT|React Hook
                        From|Git and GitHub |Firebase TailwindCss | DaisyUi |
                        Flowbite and comfort Node and Express.js | tanstack query | axios | Rest Api | JWT
                    </p>
                    </LightSpeed>
                    <Tabs>
                        <TabList>
                            <Tab>Expert</Tab>
                            <Tab>Working Expert</Tab>
                            <Tab>Contact</Tab>
                            {/* Experience Working Skills Contact */}
                        </TabList>

                        <TabPanel>
                            <h1 className='text-center text-2xl font-mono font-bold'>I am <span className='text-[#0361D1]'>Expert</span></h1>
                            <h5 className='mb-1 mt-5'>Html & Css Framework </h5>
                            <div class="shadow w-full bg-gray-700 rounded-lg h-4">
                                <div class="rounded-lg text-xs leading-none h-4 text-center bg-[#0361D1] font-semibold text-black w-[90%]">90%</div>
                            </div>
                            <h5 className='my-3'>Javascript </h5>
                            <div class="shadow w-full bg-gray-700 rounded-lg h-4">
                                <div class="rounded-lg text-xs leading-none h-4 text-center bg-green-500 font-semibold text-black w-[75%]">75%</div>
                            </div>
                            <h5 className='my-3'>Reactjs </h5>
                            <div class="shadow w-full bg-gray-700 rounded-lg h-4">
                                <div class="rounded-lg text-xs leading-none h-4 text-center bg-[#1FB2A6] font-semibold text-black w-[95%]">95%</div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h1 className='text-center text-2xl font-mono font-bold'>My Working <span className='text-[#0361D1]'>Experience</span></h1>
                            <h5 className='mb-1 mt-5'>Html5 & Css3 With Framework </h5>
                            <div class="shadow w-full bg-gray-700 rounded-lg h-4">
                                <div class="rounded-lg text-xs leading-none h-4 text-center bg-[#0361D1] font-semibold text-black w-[95%]">95%</div>
                            </div>
                            <h5 className='my-3'>Only Javascript Web Design</h5>
                            <div class="shadow w-full bg-gray-700 rounded-lg h-4">
                                <div class="rounded-lg text-xs leading-none h-4 text-center bg-green-500 font-semibold text-black w-[85%]">85%</div>
                            </div>
                            <h5 className='my-3'>Mern Stack Project With Reactjs </h5>
                            <div class="shadow w-full bg-gray-700 rounded-lg h-4">
                                <div class="rounded-lg text-xs leading-none h-4 text-center bg-[#1FB2A6] font-semibold text-black w-[80%]">80%</div>
                            </div>
                            <h5 className='my-3'>Shofipy</h5>
                            <div class="shadow w-full bg-gray-700 rounded-lg h-4">
                                <div class="rounded-lg text-xs leading-none h-4 text-center bg-[#1FB2A6] font-semibold text-black w-[50%]">50%</div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h1 className='text-center text-2xl font-mono font-bold'><span className='text-[#0361D1]'>Contact</span> Me</h1>
                            
                    <div className="">
                    <form onSubmit={handleSubmit( sendEmail)} ref={form} className='w-[90%] mx-auto'>
                        <p className='my-2 text-left'>Name</p>
                        <input className='w-full p-2 rounded-md text-black' type="text" placeholder="Name" {...register("from_name", { required: true })} /> <br />
                        <p className='my-2 text-left '>Email</p> 
                        <input className='w-full p-2 rounded-md text-black' type="email" placeholder="Email" {...register("Email", { required: true })} /> <br />
                        <p className='my-2 text-left '>Massage</p> 
                        <textarea className='w-full p-2 rounded-md text-black' rows={4} {...register("message", {})} /> <br />
                        <input className='btn btn-primary' type="submit" value={'Send'} />
                    </form>
                    </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
        </div >
    );
};

export default About;