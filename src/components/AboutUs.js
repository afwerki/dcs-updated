import React, { useState } from "react";
import Jay from "./images/Jay.jpg";
import Sukin from "./images/Sukin.jpg";
import logo from "./images/Logo_copy 4.jpg";
import me from "./images/me.jpg";
import bavana from "./images/Buvana.jpg";
import Darrell from "./images/Darrell.jpg";
import Nina from "./images/Nina.jpg";
import Sascha_Khakshouri from "./images/Sascha_Khakshouri.jpg";
import "./AboutUs.css";
// import { useState } from "react";

const AboutUs = () => {
  const [showTextJay, setShowText] = useState(false);
  const handleMouseEnterJay = (e) => {
    setShowText(true);
  };
  const handleMouseLeaveJay = (e) => {
    setShowText(false);
  };

  //sukin
  const [showTextSukin, setShowTextSukin] = useState(false);
  const handleMouseEnterSukin = (e) => {
    setShowTextSukin(true);
  };
  const handleMouseLeaveSukin = (e) => {
    setShowTextSukin(false);
  };

  //Darrell
  const [showTextDarrell, setShowTextDarrell] = useState(false);
  const handleMouseEnterDarrell = (e) => {
    setShowTextDarrell(true);
  };
  const handleMouseLeaveDarrell = (e) => {
    setShowTextDarrell(false);
  };

  return (
    <div class="container" id="AboutUs">
      <div class="row">
        <div
          class="col-md-3 col-sm-6"
          onMouseEnter={handleMouseEnterJay}
          onMouseLeave={handleMouseLeaveJay}
        >
          <div class="our-team">
            <div class="pic">
              <img src={Jay}></img>
            </div>

            <h3 className="title">Dr. Jay Verma</h3>
            <span class="post">
              a partner at Shakespeare Health Centre and the Chief Executive
              Officer of Data Care Solutions
            </span>
            <ul class="social">
              <li>
                <a href="#" class="fa fa-linkedin"></a>
              </li>
            </ul>

            <div className="details">
              {showTextJay && (
                <p className="message">
                  <h5 style={{ color: "red" }}>Dr. Jay Verma</h5>
                  is a partner at Shakespeare Health Centre and the Chief
                  Executive Officer of Data Care Solutions. He enjoys
                  redesigning clinical services to improve patients’ well-being.
                  He believes sharing knowledge and collaborative work are
                  fundamental to improving patients’ well-being. He is actively
                  involved in various programmes to help improve primary care
                  workload, so patients achieve better health outcomes. Working
                  as a practising GP helps him understand the barriers in
                  primary care well and thus can address the solutions
                  effectively. His team has won several awards illustrating best
                  practices. He is always happy to hear from individuals and
                  organisations with similar views.
                </p>
              )}
            </div>
          </div>
        </div>

        <div
          class="col-md-3 col-sm-6"
          onMouseEnter={handleMouseEnterSukin}
          onMouseLeave={handleMouseLeaveSukin}
        >
          <div class="our-team">
            <div class="pic">
              <img src={Sukin}></img>
            </div>
            <h3 class="title">Dr. Sukin Natarajan</h3>
            <span class="post">Chief Technology Officer</span>
            <ul class="social">
              <li>
                <a href="#" class="fa fa-linkedin"></a>
              </li>
            </ul>

            <div>
              {showTextSukin && (
                <p className="message">
                  <h5 style={{ color: "red" }}>Dr Sukin Natarajan </h5>
                  Dr Sukin Natarajan gained his PhD in medical engineering and
                  lectured in Biomedical Sciences in the Masters programme. He
                  is Business Manager and partner at Heathrow Medical Centre
                  with over 20 years’ experience in rolling out IT programmes
                  for local practices on behalf of Hillingdon CCG. He served as
                  the chief operating officer for his local federation, Clover
                  Health, and was key to streamlining the information technology
                  and HUB service to the practices within the federation. His
                  input was invaluable and helped Clover Health win the General
                  Practice Awards in 2017 for the Clinical Team of the Year for
                  Paediatrics. Dr Natarajan runs the data quality team in DCS
                  and is responsible for collecting and developing tools to help
                  organisations achieve their aims.
                </p>
              )}
            </div>
          </div>
        </div>

        <div
          class="col-md-3 col-sm-6"
          onMouseEnter={handleMouseEnterDarrell}
          onMouseLeave={handleMouseLeaveDarrell}
        >
          <div class="our-team">
            <div class="pic">
              <img src={Darrell}></img>
            </div>
            <h3 class="title">Darrell Clamp</h3>
            <span class="post"> Operations Manager</span>
            <ul class="social">
              <li>
                <a href="#" class="fa fa-linkedin"></a>
              </li>
            </ul>
            <div>
              {showTextDarrell && (
                <p className="message">
                  <h5 style={{ color: "red" }}>Darrell Clamp </h5>
                  is the new Operations Manager for Datacaresolutions and joined
                  in August 2022. I have come from a varied background starting
                  with 22 years in the British Army from the age of 18, to the
                  past 10 years of working in the Oil and Gas Industry. I am a
                  passionate believer in the NHS and especially around patient
                  care and how the NHS can better deliver their services in an
                  ever changing environment and deliver the services to all.
                </p>
              )}
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="our-team">
            <div class="pic">
              <img src={Nina}></img>
            </div>
            <h3 class="title">Nina</h3>
            <span class="post">Product Manager</span>
            <ul class="social">
              <li>
                <a href="#" class="fa fa-linkedin"></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="our-team">
            <div class="pic">
              <img src={Sascha_Khakshouri}></img>
            </div>
            <h3 class="title">Sascha</h3>
            <span class="post">Data Scientist</span>
            <ul class="social">
              <li>
                <a href="#" class="fa fa-linkedin"></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="our-team">
            <div class="pic">
              <img src={bavana}></img>
            </div>
            <h3 class="title">Buvana</h3>
            <span class="post">AI Engineer</span>
            <ul class="social">
              <li>
                <a href="#" class="fa fa-linkedin"></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="our-team">
            <div class="pic">
              <img src={me}></img>
            </div>
            <h3 class="title">Afwerki Ghirmay</h3>
            <span class="post">Software Developer</span>
            <ul class="social">
              <li>
                <a href="#" class="fa fa-linkedin"></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="our-team">
            <div class="pic">
              <img src={bavana}></img>
            </div>
            <h3 class="title">Tariq Fazal</h3>
            <span class="post">Graphic Designer</span>
            <ul class="social">
              <li>
                <a href="#" class="fa fa-linkedin"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
