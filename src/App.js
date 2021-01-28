import React, { Component } from 'react';
import { Globalstyle } from './style';
import Header from "./common/header/index";
import "./static/iconfont/iconfont.css";
class App extends Component {
    render() {
        return (
            <div>
                <Globalstyle />
                <Header />
            </div>
        )
    }
}

export default App;
