/*
Joseph P. Pasaoa
Viewer Component | Cats & Dogs Fake Server
*/


/* IMPORTS */
import React from 'react';
// import './Viewer.css';


/* MAIN */
const Viewer = (props) => {
  const { imgUrls } = props;
  let display = null;
  console.log(imgUrls);
    display = imgUrls.map(url => {
        return <img src={url} alt='temp' key={url} />
    });
  console.log(display);
  return (
    <>Viewer
    { display }
    </>
  );
}


/* EXPORT */
export default Viewer;
