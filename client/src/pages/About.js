import React from "react";
import Nav from "../components/Nav";
import { Jumbotron } from "react-bootstrap";

//ABOUT EAST COAT INS/PROJECT GROUP WILL GO HERE
function About () {
     return(
        <>
            <Nav />
            <Jumbotron className="JQuote">About Us</Jumbotron>
            <h1>Technologies Used</h1>
            <div className='aboutSlide'>
            <div className='aboutContainer'>
                <div><img src="https://cdn.worldvectorlogo.com/logos/javascript.svg" /></div>
                <div><img src="http://daynin.github.io/clojurescript-presentation/img/react-logo.png" /></div>
                <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" /></div>
                <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" /></div>
                <div><img src="https://miro.medium.com/max/2560/1*MuVcoMPyJcq8G4qf5s3HGQ.png" /></div>
                <div><img src="https://www.somagnews.com/wp-content/uploads/2020/04/75-e1586981465263.png" /></div>
                <div><img src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" /></div>
                <div><img src="https://avatars1.githubusercontent.com/u/1160530?s=280&v=4" /></div>
                <div><img src="https://bitsrc.imgix.net/3fb49197a90923920dcee2f4f5c36cea2c2a1f73.png" /></div>
                <div><img src="https://career.guru99.com/wp-content/uploads/2014/07/MySQL.svg_-1280x720.png" /></div>
                <div><img src="https://miro.medium.com/max/2800/1*3AdbbRN3GoTbz72XqfO96g.png" /></div>
                <div><img src="https://images-na.ssl-images-amazon.com/images/I/61DZY6oW0PL._AC_UL600_SR600,600_.png" /></div>

            </div>
            </div>
        </>
    )
}

export default About;
