import React from 'react';
import ReactDOM from 'react-dom';
import Events from '../../helper/event.js';
import './About.css';

export default class About extends React.Component {
    componentDidMount() {
        console.log('on click');
        Events.on('click', function (data) {
            console.log('dataAbout', data);
            console.log(Events);
        });
    }

    render() {
        return (
            <h1 className='title'>
                About
            </h1>
        );
    }
}
