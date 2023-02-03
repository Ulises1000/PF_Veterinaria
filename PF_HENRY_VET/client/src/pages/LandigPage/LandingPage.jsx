import React from 'react';
import {Link} from "react-router-dom";

const LandingPage = () => (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-xl my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link to='/home'>
            <button className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Start
            </button>
        </Link>
    </div>
);

export default LandingPage;
