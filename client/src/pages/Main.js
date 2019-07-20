import React, { Component } from "react";
import Jumbotron from "../components/jumbotron/index";
import About from "../components/about/index";
class Main extends Component {

render() {
    return(
        <div>
    <Jumbotron>
        <h1>Life Happens</h1>
    </Jumbotron>
    <About></About>
    </div>
    );
}
};
export default Main;