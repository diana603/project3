import React from "react";
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom';
import Nav from "../components/Nav";
import { Image, Button, Jumbotron } from "react-bootstrap";
import { Parallax, Background } from 'react-parallax';
import Footer from "../components/Footer";

const Quote = () => (
    <div>
        <Nav/>
        <Jumbotron className="JQuote">Insurance Quotes
            <h6>Please Choose An Insurance Type to Be Directed to a Quote</h6>
        </Jumbotron>
        <Parallax className="firstP"
            bgImage={require('../pages/images/car-quote.jpg')}
            bgImageAlt="auto"
            strength={-200}
        >
            <a href={"https://www.google.com/search?rlz=1C1CHBF_enUS894US894&ei=cstaX-L0HOqLytMPnIiOkAs&q=Auto+Insurance+Quotes&oq=Auto+Insurance+Quotes&gs_lcp=CgZwc3ktYWIQAzICCAAyBAgAEEMyAggAMgYIABAHEB4yBggAEAcQHjICCAAyAggAMgIIADIGCAAQBxAeMgIIAFDNQliNRmCtSGgAcAF4AIABxgGIAdwEkgEDMS4zmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwji9e3W8t_rAhXqhXIEHRyEA7IQ4dUDCA0&uact=5"} className="autoQuote">AUTO</a>
            <div style={{ height: '200px' }}/>
        </Parallax>
        <br></br>
        <Parallax
            bgImage={require('../pages/images/home-quote.jpg')}
            bgImageAlt="home"
            strength={-200}
        >
            <a href={"https://www.google.com/search?rlz=1C1CHBF_enUS894US894&ei=P8taX6-bIIekytMPtNKWkAk&q=Home+Insurance+Quotes&oq=Home+Insurance+Quotes&gs_lcp=CgZwc3ktYWIQAzICCAAyBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yAggAMgIIADICCAA6BAgAEA1Qq4ICWOiKAmDZjAJoAHABeAGAAdQCiAG9BpIBBzMuMi4wLjGYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=psy-ab&ved=0ahUKEwjvtsi-8t_rAhUHknIEHTSpBZIQ4dUDCA0&uact=5"} className="homeQuote">HOME</a>
            <div style={{ height: '200px' }}/>
        </Parallax>
        <br></br>
        <Parallax
            bgImage={require('../pages/images/life-quote.jpg')}
            bgImageAlt="life"
            strength={-200}
        >
            <a href={"https://www.google.com/search?rlz=1C1CHBF_enUS894US894&ei=YstaX-7TJNXE1QHmwabwAw&q=Life+Insurance+Quotes&oq=Life+Insurance+Quotes&gs_lcp=CgZwc3ktYWIQAzICCAAyBAgAEEMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoGCAAQBxAeUMJgWKljYI1raABwAXgAgAFoiAH5ApIBAzMuMZgBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab&ved=0ahUKEwjujKXP8t_rAhVVYjUKHeagCT4Q4dUDCA0&uact=5"} className="lifeQuote">LIFE</a>
            <div style={{ height: '200px' }}/>
        </Parallax>
        <br></br>
        <Parallax
            bgImage={require('../pages/images/boat-quote.jpg')}
            bgImageAlt="boat"
            strength={-200}
        >
            <a href={"https://www.google.com/search?rlz=1C1CHBF_enUS894US894&ei=M8taX6jGGsiKytMPtJ2ZsAE&q=Boat+Insurance+Quotes&oq=Boat+Insurance+Quotes&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgYIABAWEB4yBggAEBYQHjoECAAQQzoLCC4QsQMQxwEQowI6CAgAELEDEIMBOgcIABCxAxBDULwoWN0_YOtYaAFwAXgAgAGpAYgBuA6SAQQxNi41mAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwjoq-a48t_rAhVIhXIEHbROBhYQ4dUDCA0&uact=5"} className="boatQuote">BOAT</a>
            <div style={{ height: '200px' }}/>
        </Parallax>
        <br></br>
        <Parallax
            bgImage={require('../pages/images/motorcycle.jpg')}
            bgImageAlt="cycle"
            strength={-200}
        >
            <a href={"https://www.google.com/search?rlz=1C1CHBF_enUS894US894&ei=fMtaX6q8H-rBytMPmugS&q=Motorcycle+Insurance+Quotes&oq=Motorcycle+Insurance+Quotes&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyBggAEAcQHjIGCAAQBxAeMgIIADICCAAyBggAEAcQHjICCAA6BAgAEA1Q9VJY42Bg62FoAXABeACAAa0BiAGNB5IBBDEwLjGYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=psy-ab&ved=0ahUKEwiq6tLb8t_rAhXqoHIEHRq0BAAQ4dUDCA0&uact=5"} className="cycleQuote">MOTORCYCLE</a>
            <div style={{ height: '200px' }}/>
        </Parallax>
        <Footer/>
    </div>
);

export default Quote;
