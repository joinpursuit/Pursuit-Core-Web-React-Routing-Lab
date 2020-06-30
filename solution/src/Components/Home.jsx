import React from 'react';

const Home = () => {
    return (
        <div className='.container'>
            <h2 className='text-muted mt-3 ml-2 mr-2'>Welcome to Pet Generator</h2>
            <p className='font-weight-light mt-5 ml-2 mr-2 '>Powered by Dog & Cat API's, Bootstrap & React Hooks, we generate adorable cats and dogs.
            <br/>
            Click on a link in the navbar to see some random images. 
            <br/>
            Choose how many you'd like to see with the number dropdown, or just search a breed.</p>
        </div>
    )
};

export default Home;