import React from 'react';
import project from '../assets/project.jpg';
import './style.css'
import ShowMoreText from "react-show-more-text";

const Projects = () => {

    return (
        <div id='project'>
            <h1 className='text-center my-5 text-[#0F61D1] text-4xl font-serif'>My Project</h1>     
            <div className="bg-project w-full h-[450px] bg-cover items-center bg-fixed">
                <p></p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 ">
                <div className="card w-full shadow-xl">
                    <figure className='imgcard h-[200px]'><span ></span></figure>
                    <div className="mx-4 mt-2">
                        <h2 className="card-title">
                            Dance Summer School
                        </h2>

                        This websites a summer school systems have many class.
                        Student Dashboard: You are not login you don't go this page, When you click this button it going to only your post data can see.
                        <li>
                            My Selected Classes: The student will see all the Classes they booked after clicking the Select button. You must display the relevant information on the Class, Delete, and Pay buttons. Delete button, a student can remove a selected Class from the list.
                        </li>
                        <li>
                            My Selected Classes: The student will see all the Classes they booked after clicking the Select button. You must display the relevant information on the Class, Delete, and Pay buttons. Delete button, a student can remove a selected Class from the list.
                        </li>

                        <div className="card-actions justify-end">
                            <div className="badge badge-outline"><a href="https://sskarate-assingment12.web.app/">Live</a></div>
                            <div className="badge badge-outline"><a href="">Git</a></div>
                        </div>
                    </div>
                </div>
                <div className="card w-full shadow-xl">
                    <figure className='imgcard2'><span ></span></figure>
                    <div className="mx-4 mt-2">
                        <h2 className="card-title">
                            Restodent project
                        </h2>
                        <p>

                            Summary of the T-Markets
                            These websites showcase toy niche websites that have toys of some knowledge to toy consumers.
                            <li>
                                All Toys: this button show All Toys details and his some info Seller and you can also view more info this toys.
                            </li>
                            <li>
                                Search: Search by Products name
                                Sort: this data sorted by Ascending
                                My Toys Page: -you are not login you don't go this page, When you click this button it going to only your post data can see.
                            </li>

                            <li>
                                Add a Toy:
                                This page are post toy you can register and post your toys information.
                            </li>
                            <li>
                                Blog Page:
                                Are all QUESTION & ANSWER hear``
                                Must you login your email or registration When you want enjoy full of futures
                            </li>
                        </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline"><a href="https://assignment-food-recipes-786ac.web.app/">Live</a></div>
                            <div className="badge badge-outline"><a href="">Git</a></div>
                        </div>
                    </div>
                </div>
                <div className="card w-full shadow-xl">
                    <figure className='imgcard3 h-[200px]'><span ></span></figure>
                    <div className="mx-4 mt-2">
                        <h2 className="card-title">
                            factoryelectric.com.bd
                        </h2>
                        <p>

                            Summary of the T-Markets
                            These websites showcase toy niche websites that have toys of some knowledge to toy consumers.
                            <li>
                                All Toys: this button show All Toys details and his some info Seller and you can also view more info this toys.
                            </li>
                            <li>
                                Search: Search by Products name
                                Sort: this data sorted by Ascending
                                My Toys Page: -you are not login you don't go this page, When you click this button it going to only your post data can see.
                            </li>
                            <li>
                                Add a Toy:
                                This page are post toy you can register and post your toys information.
                            </li>
                            <li>
                                liveLink : <a href=""></a>
                            </li>

                        </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline"><a href="https://factoryelectric.com.bd/">Live</a></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Projects;