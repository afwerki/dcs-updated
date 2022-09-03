import React from "react";
import Carousel from "react-bootstrap/Carousel";
import hero from "./Hero.css";
import first_slide from './images/first_slide_Notext.png';

const Hero2 = () => {
  return (
    <div className="hero">
      <Carousel className="Carousel">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={first_slide}
            alt="First slide"
          />
          <Carousel.Caption>
            <div
              class="card_one"
              data-tilt
              data-tilt-scale="0.95"
              data-tilt-startY="120"
            >
              <div class="slide_text">
                <span>
                  Did you know that an average GP would spend nearly 5 hours per
                  week filing documents?
                </span>
                <br></br>
              </div>
              <button className="file_managment_btn">
                Click to learn more
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/vectors/electronic-document-management-vector-id546798652?k=20&m=546798652&s=612x612&w=0&h=0KMbRM4P-M0nPs-K7_pNsjJpZjIyDwbNTjyXvZLHO_g="
            alt="Second slide"
          />
          <Carousel.Caption>
            <div
              class="card_one"
              data-tilt
              data-tilt-scale="0.95"
              data-tilt-startY="120"
            >
              <div class="slide_text">
                <span>
                  DCS believes that better health outcomes can be achieved if we
                  improve our data capturing methods{" "}
                </span>
                <br></br>
              </div>
              <button className="file_managment_btn">
                Click to learn more
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/medical-technology-concept-remote-medicine-electronic-medical-record-picture-id1300745916?k=20&m=1300745916&s=612x612&w=0&h=EL2-KOTXRchCzdch8neyuCr_sLA-ELI8Bm0A3kKJPqo="
            alt="Third slide"
          />
          <Carousel.Caption>
            <div
              class="card_one"
              data-tilt
              data-tilt-scale="0.95"
              data-tilt-startY="120"
            >
              <div class="slide_text">
                <br></br>
                <span>AI Driven Decision</span>
                <br></br>
              </div>
              <button className="file_managment_btn">
                Click to learn more
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero2;
