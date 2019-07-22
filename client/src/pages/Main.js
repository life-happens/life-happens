import React, { Component } from "react";
import Jumbotron from "../components/jumbotron/index";
import About from "../components/about/index";
import Login from "../components/login/index";
import Header from "../components/header_footer/Header";
import Footer from "../components/header_footer/Footer";

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <Jumbotron>
                    <h1>Life Happens</h1>
                </Jumbotron>
                <About>
                </About>
                <Login></Login>
                <Footer />
            </div>
        );
    }
};
export default Main;