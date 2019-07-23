import React, { Component } from "react";
import Jumbotron from "../components/jumbotron/index";
import About from "../components/about/index";
import Login from "../components/login/index";
import Header from "../components/header_footer/Header";
import Footer from "../components/header_footer/Footer";
import NavButtons from "../components/navButtons";

class Main extends Component {


    render() {
        return (
            <div>
                <Header>
                    <NavButtons />
                    </Header>
                <Jumbotron>
                    <div className="text_dark image">
                    <h1>Life Happens</h1>
                    <h3>A customizable event template for the occassional host</h3>
                    </div>
                </Jumbotron>
                <About />
     
                <Login />
                <Footer />
            </div>
        );
    }
};

export default Main;

