import React from 'react';
import ReactDOM from 'react-dom';
import { Router as HashRouter, Route, Link } from "react-router-dom";
const createHistory = require("history").createHashHistory;
const history = createHistory();


import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Stu from './Components/student/student.jsx';
import Aroute from './Components/navigation/navigation.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { textList: [] };
    }
    componentDidMount() {
        setTimeout(function () {
            this.setState({
                textList: [
                    '1元素',
                    '2元素',
                    '3元素',
                    '4元素',
                    '5元素',
                    '6元素'
                ]
            })
        }.bind(this), 1000);
    }
    getHomeData(data) {
        console.log(data);
    }
    render() {
        return (
            <HashRouter history={history}>
                <div>
                    <Aroute />
                    <ul>
                        <li>
                            <Route
                                path="/Home"
                                render={props => (
                                    <Home data={this.state.textList} call={this.getHomeData} />
                                )}
                            />

                            <Route
                                path="/About"
                                render={props => (
                                    <About />
                                )}
                            />

                            <Route
                                path="/Stu"
                                render={props => (
                                    <Stu />
                                )}
                            />
                        </li>
                    </ul>

                </div>
            </HashRouter>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
