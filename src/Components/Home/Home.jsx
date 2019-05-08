import React from 'react';
import ReactDOM from 'react-dom';
import Events from '../../helper/event.js';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '默认'
        };
    }

    // 创建
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        setTimeout(function () {
            this.setState({
                text: '请求的数据'
            });
        }.bind(this), 3000);

        console.log('componentDidMount');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillReceiveProps(state) {
        console.log('componentWillReceiveProps', state);

    }


    click() {
        this.props.call(123);
        console.log('emit');
        Events.emmit('click', this.state.text);
        console.log(this.props);
    }

    render() {
        return (
            <ul>
                {
                    this.props.data.map((text) => {
                      return <li>{text}</li>;
                    })
                }
            </ul>
        );
    }
}
