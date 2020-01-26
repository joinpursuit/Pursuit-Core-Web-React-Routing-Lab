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
    <div className="imagespot-bg-method" style={{ backgroundImage: `url(${props.url})` }}></div>
  );
}


/* EXPORT */
export default ImageSpot;
