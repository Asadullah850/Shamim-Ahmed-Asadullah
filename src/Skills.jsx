import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Marquee from "react-fast-marquee";
import express from './assets/icons8-express-96.png';
import bootstrap from './assets/icons8-bootstrap-96.png';
import css3 from './assets/icons8-css3-96.png';
import html5 from './assets/icons8-html5-64.png';
import javascript from './assets/icons8-javascript-128.png';
import mongoDb from './assets/icons8-mongodb-96.png';
import react from './assets/icons8-react-80.png';
import tailwind from './assets/icons8-tailwindcss-96.png';
import firebes from './assets/icons8-firebase-96.png';
import nodejs from './assets/icons8-nodejs-96.png';
import jwt from './assets/icons8-jwt-96.png';
import figma from './assets/icons8-figma-96.png';
import vscode from './assets/icons8-visual-studio-96.png';
import npm from './assets/icons8-npm-96.png';
import git from './assets/icons8-git-100.png';
import github from './assets/icons8-github-96.png';
import netlify from './assets/icons8-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites.-96.png';
import daisyUi from './assets/daisyui.png';
import chrome from './assets/icons8-chromium-96.png';
import wordpress from './assets/icons8-wordpress-96.png';
import elementor from './assets/icons8-elementor-the-wordpress-page-builder,-a-simple,-intuitive-drag-and-drop-interface.-96.png';
import woocommers from './assets/icons8-woocommerce-128.png';
import chatgpt from './assets/icons8-chatgpt-90.png';
import { Flip } from 'react-reveal';


const Skills = () => {
    return (
        <div >
            <h1 className='text-center my-5 text-[#0F61D1] text-4xl font-serif'>Skills</h1>
            <hr className='w-[90%] mx-auto mb-4' />
            <Flip left>
                <Marquee speed={40}>
                    <div className="">
                        <img className='w-32 p-2 ' src={html5} alt="" srcset="" />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 ' src={css3} alt="" srcset="" />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 ' src={javascript} alt="" srcset="" />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 ' src={react} alt="" srcset="" />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 ' src={nodejs} alt="" srcset="" />
                    </div>
                    <div className="">
                        <img className='w-32 rounded-lg bg-white' src={express} alt="" srcset="" />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 ' src={mongoDb} alt="" srcset="" />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 ' src={jwt} alt="" srcset="" />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 ' src={bootstrap} alt="" srcset="" />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 ' src={tailwind} alt="" srcset="" />
                    </div>
                </Marquee>
            </Flip>

            <h1 className='text-center my-5 text-[#0F61D1] text-4xl font-serif'>Tools I use every day</h1>
            <hr className='w-[90%] mx-auto mb-4' />
            <Zoom left>
                <Marquee pauseOnHover direction='right' speed={20}>
                    <div className="">
                        <img className='w-32 p-2 mx-2 ' src={figma} alt="Firebase" srcset="" title='Firebase' />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 mx-2 ' src={vscode} alt="" srcset="" title='vscode' />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 mx-2 ' src={firebes} srcset="" title='Firebase' />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 mx-2 ' src={daisyUi} srcset="" title='daisyUi' />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 mx-2 ' src={npm} srcset="" title='npm' />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 mx-2 ' src={git} srcset="" title='git' />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 mx-2 ' src={github} srcset="" title='github' />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 mx-2 ' src={netlify} srcset="" title='netlify' />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 mx-2 ' src={wordpress} srcset="" title='wordpress' />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 mx-2 ' src={elementor} srcset="" title='Elementor' />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 mx-2 ' src={woocommers} srcset="" title='woocommers' />
                    </div>
                    <div className="">
                        <img className='w-32 p-2 mx-2 ' src={chatgpt} srcset="" title='CHATGPT' />
                    </div>
                </Marquee>
            </Zoom>
        </div>
    );
};

export default Skills;