/*
Joseph P. Pasaoa
ImageCard Component | Cats & Dogs Fake Server
*/


/* IMPORTS */
    // external
    import React from 'react';

    // local
    import './ImageCard.css';


/* COMPONENT */
const ImageCard = (props) => {

  return (
    <>
      <img src={props.url} alt={props.alt} className="imagecard" />
    </>
  );
}


/* EXPORT */
export default ImageCard;
