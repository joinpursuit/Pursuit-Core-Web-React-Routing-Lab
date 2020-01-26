import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import AppHook from './AppHook';


ReactDOM.render(
    <BrowserRouter>
         <AppHook/>
    </BrowserRouter>
   
, document.getElementById('root'));


