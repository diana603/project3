import React from "react";
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom';
import Nav from "../components/Nav";
import { Image, Button } from "react-bootstrap";
import { Parallax, Background } from 'react-parallax';



//ABOUT EAST COAT INS/PROJECT GROUP WILL GO HERE
const Quote = () => (
    <div>
        <Nav />
        <h1>Choose Quote</h1>
        {/* -----dynamic blur-----*/}
        <Parallax
            // blur={{ min: -15, max: 15 }}
            bgImage={require('../pages/images/car-quote.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            <a href={"http://google.com"} className="autoQuote">AUTO QUOTE</a>
            <div style={{ height: '200px' }} />
        </Parallax>
         {/* -----renderProp: "renderLayer"-----*/}
         <br></br>
         <Parallax
            // blur={{ min: -15, max: 15 }}
            bgImage={require('../pages/images/home-quote.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            <a href={"http://google.com"} className="homeQuote">HOME QUOTE</a>
            <div style={{ height: '200px' }} />
        </Parallax>
         {/* -----renderProp: "renderLayer"-----*/}
         <br></br>
        <Parallax
            // blur={{ min: -15, max: 15 }}
            bgImage={require('../pages/images/life-quote.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            <a href={"http://google.com"} className="lifeQuote">LIFE QUOTE</a>
            <div style={{ height: '200px' }} />
        </Parallax>
         {/* -----renderProp: "renderLayer"-----*/}


    </div>
);

export default Quote;
