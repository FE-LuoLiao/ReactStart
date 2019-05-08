import React from 'react';
import ReactDOM from 'react-dom';
import { Router as HashRouter, Route, Link } from "react-router-dom";

export default class Aroute extends React.Component {
    render() {
        return (
            <ul>
                <li className = "first">
                    <Link to="/Home">Home</Link>
                </li>
                <li className = "second">
                    <Link to="/About">About</Link>
                </li>
                <li className = "third">
                    <Link to="/Stu">Stu</Link>
                </li>
            </ul>  
        )
    }
}  