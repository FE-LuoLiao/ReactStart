import React from 'react';
import ReactDOM from 'react-dom';
import Events from '../../helper/event.js';

export default class Stu extends React.Component {
   
    componentDidMount() {
        console.log('on click');
        Events.on('click', function (data) {
            console.log('dataStudent', data);
            console.log(Events);
        });
    }
    
    render() {
        return (
            <h1>
                Stu
            </h1>
        );
    }
}
