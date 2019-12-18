import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <nav>
                <Link to="/dog/random"> Dog </Link>
                <Link to="/cat"> Cat </Link>
            </nav>
            <p>Pick your animal!</p>
        </div>
    );
};

export default Home;
