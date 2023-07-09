import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-[#111418]/50 text-center fixed w-full'>
            <div className="navbar font-serif ">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Asadullah</a>
                </div>
                <div className="flex-none lg:mr-20 ">
                    <ul className="menu menu-horizontal px-1 max-md:hidden">
                        <li className='btn btn-sm btn-primary bg-transparent border-none mx-1'>Home</li>
                        <li className='btn btn-sm btn-primary bg-transparent border-none mx-1'><a href="#project">Projects</a></li>
                        <li className='btn btn-sm btn-primary bg-transparent border-none mx-1'><a href="#contact">Contact</a></li>
                        <li className='btn btn-sm btn-primary bg-transparent border-none mx-1'> <a href="#about">About</a></li>
                        <button className="btn btn-outline btn-accent btn-sm ">
                            <a
                                className="button"
                                href="https://drive.google.com/file/d/11egexBDga1S09-CCk8jrqA1GRE9ThnWt/view?usp=sharing"
                                download="Shamim-Ahmed-Asadullah-Full-Stack-developer.pdf"
                            >
                                Resume
                            </a>
                        </button>
                    </ul>
                    {/* mobile responsive */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            <li className='btn btn-sm btn-primary bg-transparent border-none mx-1'>Home</li>
                            <li className='btn btn-sm btn-primary bg-transparent border-none mx-1'><a href="#project">Projects</a></li>
                            <li className='btn btn-sm btn-primary bg-transparent border-none mx-1'><a href="#contact">Contact</a></li>
                            <li className='btn btn-sm btn-primary bg-transparent border-none mx-1'> <a href="#about">About</a></li>
                        </ul>
                    </div>
                </div>
                <button className="btn btn-outline btn-accent btn-sm lg:hidden">
                    <a
                        className="button"
                        href="https://drive.google.com/file/d/1PTwCEWTtvGomGWxnwDIImGol6diD8b03/view?usp=sharing"
                        download="Shamim-Ahmed-Asadullah-Mern-Stack-developer.pdf"
                    >
                        Resume
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Navbar;