import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export class BootstrapCarousel extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid'>
          <Carousel style={{ padding: 0, margin: '0px auto' }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={'../assets/img/family_1920.jpg'}
                alt={"image of a family"}
              />
              < Carousel.Caption style={{ "text-color": 'black' }}>
                <h2> For all the little moments in life, Life Insurance is the key to protecting your family </h2 >
              </Carousel.Caption >
            </Carousel.Item >
            < Carousel.Item style={{ height: "600px" }}>
              <img
                style={{ height: "600px" }}
                className="d-block w-100"
                src={'../assets/img/fiat.jpg'}
                alt={"old fiat in an autumn day"}
              />
              < Carousel.Caption >
                < h2 >On the road or at home, safeguard your future</h2 >
              </Carousel.Caption >
            </Carousel.Item >
            < Carousel.Item style={{ 'height': "600px" }}>
              < img
                style={{ 'height': "600px" }}
                className="d-block w-100"
                src={'../assets/img/home.jpg'}
                alt={"house covered by ivy"}
              />
              < Carousel.Caption >
                < h2 > The biggest investment in your life deserves only the best.</h2 >
              </Carousel.Caption >
            </Carousel.Item >
            < Carousel.Item style={{ 'height': "600px" }}>
              < img
                style={{ 'height': "600px" }}
                className="d-block w-100"
                src={'../assets/img/panorama_1920.jpg'}
                alt={"family on top of a mountain"}
              />
              < Carousel.Caption >
                < h2 style={{ textDecorationColor: "forestgreen" }} > From the highs to the lows, be reassured that East Coast is with you</h2 >
              </Carousel.Caption >
            </Carousel.Item >
            < Carousel.Item style={{ 'height': "600px" }}>
              < img
                style={{ 'height': "600px" }}
                className="d-block w-100"
                src={'../assets/img/pair_1920.jpg'}
                alt={"couple in the woods"}
              />
              < Carousel.Caption >
                < h2 > Love, live, laugh with East Coast Life Insurance</h2 >
              </Carousel.Caption >
            </Carousel.Item >
            < Carousel.Item style={{ 'height': "600px" }}>
              < img
                style={{ 'height': "600px" }}
                className="d-block w-100"
                src={'../assets/img/sunset_1920.jpg'}
                alt={"kids jumping on the sunset at the beach"}
              />
              < Carousel.Caption >
                < h2 > On the sunset of your life think about leaving a better future for your loved ones</h2 >
              </Carousel.Caption >
            </Carousel.Item >
          </Carousel >
        </div >
      </div >
    )
  }
}

export default BootstrapCarousel;
