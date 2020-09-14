import React from "react";
import Nav from "../components/Nav";
import { Jumbotron, Card, CardDeck } from "react-bootstrap";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';



function About () {
     return(
         <>
            <Nav />
            <Jumbotron className="JQuote">About Us</Jumbotron>
            <h1 className="aboutHeader">Languages and Technologies Used</h1>
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
                <div><img src="https://miro.medium.com/max/6668/1*XP-mZOrIqX7OsFInN2ngRQ.png" /></div>
                <div><img src="https://career.guru99.com/wp-content/uploads/2014/07/MySQL.svg_-1280x720.png" /></div>
                <div><img src="https://miro.medium.com/max/2800/1*3AdbbRN3GoTbz72XqfO96g.png" /></div>
                <div><img src="https://www.timewax.com/wp-content/uploads/2018/10/Slack-RGB.png" /></div>
                <div><img src="https://uca.edu/cte/files/2020/07/zoom.png" /></div>

            </div>
            </div>
        <br></br>
        <h1 className="teamHeader">The Team</h1>

        {/* Team Cards */}

        <CardDeck>
            {/* ScottCard */}
        <Card>
            <Card.Img variant="top" src={require("./images/scott.jpg")} />
            <Card.Body>
            <Card.Title>Scott House</Card.Title>
            <Card.Text>
            Technology, engineering, and coding have always been a hobby and passion of mine. Although I ended up not completing an engineering degree at the University of Michigan, I did enroll in the engineering program at the University of Maine and completed a semester of computer and electrical engineering.
            I recently have been a student in the University of New Hampshire's Full-Stack Coding Program, using my previous C programming experience to help me to be successful with the transition to HTML, Javascript, CSS, as well as Node, Git, React, Mongo/MySQL, and NoSQL.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to="https://github.com/sehouse" className="text-muted">GitHub</Link>
                <Link to="https://www.linkedin.com/in/sehouse/" className="linkedin">  Linked In</Link>
            </Card.Footer>
        </Card>
        {/* AngelaCard */}
        <Card>
            <Card.Img variant="top" src={require("./images/angela.png")}/>
            <Card.Body>
            <Card.Title>Angela Gutierrez</Card.Title>
            <Card.Text>
            Angela has loved computers since she got her first one a while ago, but now she wants to be the one creating the user experience. To that end, she decided to move to the other side of the screen and learn coding. Angela is planning to apply  her background in architecture and human centered design to the digital world. She loves to read and spending time with her family.{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to="https://github.com/lalaggv2" className="text-muted">GitHub</Link>
                <Link to="https://www.linkedin.com/in/luz-angela-g-3256769b/" className="linkedin">  Linked In</Link>
            </Card.Footer>
        </Card>
        {/* ShannonCard */}
        <Card>
            <Card.Img variant="top" src={require("./images/shannon.jpg")} />
            <Card.Body>
            <Card.Title>Shannon Trainor</Card.Title>
            <Card.Text>
                Shannon is an aspiring Full Stack Web Developer who thoroughly enjoyed her time during UNH Coding Bootcamp. She is a strong and indepedent worker with hopes in scoring an internship or a full time job in the coding world. She is familiar with languages such as HTML, CSS, Javascript, Node, Express, and React, as well as practiced with Mongoose, Sequelize, and PWA. In her free time she enjoys hiking, biking, and spending time with her 2 dogs.   
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to="https://github.com/sehouse" className="text-muted">GitHub</Link>
                <Link to="https://www.linkedin.com/in/shannonltrainor/" className="linkedin">  Linked In</Link>
            </Card.Footer>
        </Card>
        {/* DianaCard */}
        <Card>
            <Card.Img variant="top" src={require("./images/diana.jpg")} />
            <Card.Body>
            <Card.Title>Diana Zsigray</Card.Title>
            <Card.Text>
            Diana really enjoys learning new things and this coding class was differently a learning experience. In her free time, she likes to run and hang out with her puppy Benny.
            </Card.Text>    
            </Card.Body>
            <Card.Footer>
                <Link to="https://github.com/diana603" className="text-muted">GitHub</Link>
                <Link to="https://www.linkedin.com/in/diana-zsigray-b10a81123/" className="linkedin">  Linked In</Link>
            </Card.Footer>
        </Card>
    </CardDeck>
    
    <Footer />
    </>
    )
}

export default About;
