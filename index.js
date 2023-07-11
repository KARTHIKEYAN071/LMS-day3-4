import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{BrowserRouter} from 'react-router-dom'
// import MyApp from './App';
import Routing from './Route';
// import SignUp from './SignUp';
import reportWebVitals from './reportWebVitals';
import MyApp from './App';
import SignUp from './SignUp';
// import SignUp from './SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routing />
    {/* <SignUp/> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
