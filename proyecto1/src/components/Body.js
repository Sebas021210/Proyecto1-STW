import React, { Component } from "react";
import Slide from "../components/componentsBody/Slide.js"
import Cards from "../components/componentsBody/Cards.js"

export default class Body extends Component{
    render(){
        return(
            <div id="Body">
                <Slide />
                <Cards />
            </div>
        );
    }
};

