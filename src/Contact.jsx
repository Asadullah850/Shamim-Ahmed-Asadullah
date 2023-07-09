import React, { useRef } from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "./assets/email.json";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
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
        <div id='contact'>
            <ToastContainer />
            <h1 className='text-center my-5 text-[#0F61D1] text-4xl font-serif'>Contact</h1>
            <div className="">
                <Lottie className='h-96 w-full' animationData={groovyWalkAnimation} loop={true}>
                </Lottie>
                <div className=" text-center w-[80%] mx-auto z-10">
                    <form onSubmit={handleSubmit( sendEmail)} ref={form} className='w-full'>
                        <p className='my-2 text-left lg:ml-[10%]'>Name</p>
                        <input className='w-full lg:w-[80%] p-2 rounded-md text-black' type="text" placeholder="Name" {...register("from_name", { required: true })} /> <br />
                        <p className='my-2 text-left lg:ml-[10%]'>Email</p>
                        <input className='w-full lg:w-[80%] p-2 rounded-md text-black' type="email" placeholder="Email" {...register("Email", { required: true })} /> <br />
                        <p className='my-2 text-left lg:ml-[10%]'>Subject</p>
                        <input className='w-full lg:w-[80%] p-2 rounded-md text-black' type="text" placeholder="Subject" {...register("Subject", {})} /> <br />
                        <p className='my-2 text-left lg:ml-[10%]'>Subject</p>
                        <textarea className='w-full lg:w-[80%] p-2 rounded-md text-black' rows={8} {...register("message", {})} /> <br />
                        <input className='btn btn-primary' type="submit" value={'Send'} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;