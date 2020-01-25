/*
Joseph P. Pasaoa
Viewer Component | Cats & Dogs Fake Server
*/


/* IMPORTS */
import React from 'react';
import './Viewer.css';


/* COMPONENT */
const Viewer = (props) => {

  return (
    <div className="viewer">
      { props.onDisplay }
    </div>
  );
}


/* EXPORT */
export default Viewer;
