import React, { useState } from 'react';
import Background from './backgroundSVG/Background';
import Logo from './backgroundSVG/Logo';

const LoginPage = () => {
    return (
        <div className="leading-normal tracking-normal text-white gradient">
            <div className="pt-24">
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                        {/* <p className="uppercase text-2xl tracking-loose w-full">
                            SNAPDESK
                        </p> */}
                        {/* <img src="../../img/snapdesk/b/snapdesk_logo_b.png" /> */}
                        <Logo />
                        <h1 className="my-4 text-4xl font-bold leading-tight">
                            Facilitate Collaboration Between Seniors and Juniors
                            in Your Organization
                        </h1>
                        {/* <p className="leading-normal text-2xl mb-8">
                            Sub-hero message, not too long and not too short.
                            Make it just right!
                        </p> */}
                        <button className="mx-auto text-xl lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                            Sign in with GitHub
                        </button>
                    </div>
                    <div className="w-full md:w-3/5 py-6 text-center">
                        <img
                            className="w-full md:w-4/5 z-50"
                            src="../../img/hero.png"
                        />
                    </div>
                </div>
            </div>
            <Background />
        </div>
    );
};

export default LoginPage;
