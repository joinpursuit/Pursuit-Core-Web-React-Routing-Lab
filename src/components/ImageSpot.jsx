/*
Joseph P. Pasaoa
ImageSpot Component | Cats & Dogs Fake Server
*/


/* IMPORTS */
    // external
    import React from 'react';

    // local
    import './ImageSpot.css';


/* COMPONENT */
const ImageSpot = (props) => {

  return (
    <>
      <img src={props.url} alt="random pet" className="imagespot" />
    </>
  );
}


/* EXPORT */
export default ImageSpot;
