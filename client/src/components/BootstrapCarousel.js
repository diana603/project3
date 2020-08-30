import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";


export class BootstrapCarousel extends Component {
  render() {
    return (

      < div >
        < div className='container-fluid' >
          < Carousel >
            < Carousel.Item style={{ 'height': "600px" }} >
              < img style={{ 'height': "600px" }}

                className="d-block w-100"
                src={'../assets/img/family_1920.jpg'} />

              < Carousel.Caption style={{ "text-color": 'black' }}>
                < h3 > For all the little moments in life, Life Insurance is the key to protect them </h3 >
              </Carousel.Caption >
            </Carousel.Item >


            < Carousel.Item style={{ height: "600px" }}>

              <img
                style={{ height: "600px" }}
                className="d-block w-100"
                src={'../assets/img/fiat.jpg'} />

              < Carousel.Caption >

                < h3 >On the road or at home, safeguard your future</h3 >
              </Carousel.Caption >

            </Carousel.Item >
            < Carousel.Item style={{ 'height': "600px" }}>
              < img style={{ 'height': "600px" }}

                className="d-block w-100"

                src={'../assets/img/home.jpg'} />

              < Carousel.Caption >

                < h3 > The biggest investment in your life deserves only the best.</h3 >

              </Carousel.Caption >

            </Carousel.Item >
            < Carousel.Item style={{ 'height': "600px" }}>
              < img style={{ 'height': "600px" }}

                className="d-block w-100"

                src={'../assets/img/panorama_1920.jpg'} />

              < Carousel.Caption >

                < h3 > From the heights to the lows, be reassured that East Coast is with you</h3 >

              </Carousel.Caption >
            </Carousel.Item >
            < Carousel.Item style={{ 'height': "600px" }}>
              < img style={{ 'height': "600px" }}

                className="d-block w-100"

                src={'../assets/img/pair_1920.jpg'} />

              < Carousel.Caption >

                < h3 > Love, live, laugh with East Coast Life Insurance</h3 >

              </Carousel.Caption >
            </Carousel.Item >
            < Carousel.Item style={{ 'height': "600px" }}>
              < img style={{ 'height': "600px" }}

                className="d-block w-100"

                src={'../assets/img/sunset_1920.jpg'} />

              < Carousel.Caption >

                < h3 > On the sunset of your life think about leaving a better future for them</h3 >

              </Carousel.Caption >
            </Carousel.Item >
          </Carousel >
        </div >
      </div >
    )

  }
}

export default BootstrapCarousel;