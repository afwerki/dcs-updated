import React from "react";
import AI1 from "./images/AI_back.jpeg";
import AI2 from "./images/AI.jpeg";
import doc_avator from "./images/doc_avator.jpg";
import demand_and_capacity from "./images/demand_and_capacity.jpg";
import documnet_management from "./images/documnet_management.jpg";
import dcs_screenShot from './images/dcs_pic.png'
import "./Resources.css";
const Resources = () => {
  return (
    <section id="about">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5 py-5">
                    <div class="row">

                        <div class="col-12">
                            <div class="info-box">
                                <img src={documnet_management} alt=""></img>
                                <div class="ms-4">
                                    <h5>Smart Tools</h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page </p>
                                        <a href="#" class="btn btn-brand">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mt-4">
                            <div class="info-box">
                                <img src={doc_avator} alt=""></img>
                                <div class="ms-4">
                                    <h5>Smart Searches</h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page </p>
                                        <a href="#" class="btn btn-brand">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mt-4">
                            <div class="info-box">
                                <img src={demand_and_capacity} alt=""></img>
                                <div class="ms-4">
                                    <h5>Demand & Capacity Modelling</h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page </p>
                                        <a href="#" class="btn btn-brand">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <img src={dcs_screenShot} alt=""></img>
                </div>
            </div>
        </div>
    </section>
    // <section id="services" class="text-center">
    //   <div class="SmartTools_container">
    //     <div class="row">
    //       <div class="col-12">
    //         <div class="intro">
    //           <h6>Our Resoruces</h6>
    //           <h1>Our Resoruces</h1>
    //           <p class="mx-auto">
    //             Data Care Solutions has helped our clients achieve workplace
    //             transformation by using innovative solutions. We spend time with
    //             our clients understanding their challenges and then using our
    //             bespoke tried and tested metrics present our clients with
    //             quantitative and qualitative data to assist them with potential
    //             solutions.{" "}
    //           </p>
              
    //         </div>
    //       </div>
    //     </div>
    //     <div class="row g-4">
    //       <div class="col-lg-4 col-md-6">
    //         <div class="service">
    //           <img src={doc_avator} alt=""></img>
    //           <h5>Transforming a Poor Performance Practice</h5>
    //           <p>
    //             Contrary to popular belief, Lorem Ipsum is not simply random
    //             text. It has roots in a piece of classical Latin literature from
    //           </p>
    //         </div>
    //       </div>
    //       <div class="col-lg-4 col-md-6">
    //         <div class="service">
    //           <img src={demand_and_capacity} alt=""></img>
    //           <h5>QOF Recognised Codes</h5>
    //           <p>
    //             Contrary to popular belief, Lorem Ipsum is not simply random
    //             text. It has roots in a piece of classical Latin literature from
    //           </p>
    //         </div>
    //       </div>

    //       <div class="col-lg-4 col-md-6">
    //         <div class="service">
    //           <img src={documnet_management} alt=""></img>
    //           <h5>Data Quality Searches</h5>
    //           <p>
    //             Contrary to popular belief, Lorem Ipsum is not simply random
    //             text. It has roots in a piece of classical Latin literature from
    //           </p>
    //         </div>
    //       </div>
    //       <div class="col-lg-4 col-md-6">
    //         <div class="service">
    //           <img src={documnet_management} alt=""></img>
    //           <h5>NHS Health Check Searches</h5>
    //           <p>
    //             Contrary to popular belief, Lorem Ipsum is not simply random
    //             text. It has roots in a piece of classical Latin literature from
    //           </p>
    //         </div>
    //       </div>
    //       <div class="col-lg-4 col-md-6">
    //         <div class="service">
    //           <img src={documnet_management} alt=""></img>
    //           <h5>Tracking Enhanced Services</h5>
    //           <p>
    //             Contrary to popular belief, Lorem Ipsum is not simply random
    //             text. It has roots in a piece of classical Latin literature from
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};
export default Resources;
