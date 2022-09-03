import React from "react";
import medics from "./images/medics.jpg";
import docwithlaptop from "./images/docWithLaptop.jpg";
import smart_s from "./images/smart_s.jpg";
import fileAway from "./images/fileAway.jpg";
import "./SmartTools.css";
import ReactReadMoreReadLess from "react-read-more-read-less";

const SmartTools = () => {
  return (
    <section id="SmartTools" class="text-center">
      <div class="SmartTools_container">
        <div class="row">
          <div class="col-12">
            <div class="intro">
              <h1 className="SmartTools_title">Data Care Solutions</h1>
              <span>Clean Data Safe patient</span>
              <h6>What We Do?</h6>
              {/* <p class="mx-auto"> */}
                Data Care Solutions has helped our clients achieve workplace
                transformation by using innovative solutions. We spend time with
                our clients understanding their challenges and then using our
                bespoke tried and tested metrics present our clients with
                quantitative and qualitative data to assist them with potential
                solutions.
              {/* </p> */}
            </div>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="service">
              <img src={smart_s} alt=""></img>
              <h5>Smart Searches</h5>
              <p>
                <ReactReadMoreReadLess
                  readMoreClassName="readMoreClassName"
                  readLessClassName="readLessClassName"
                  charLimit={200}
                  readMoreText="Read More  ▲ "
                  readlessText="Read Lesss ▼ "
                >
                  DCS believes that better health outcomes can be achieved if we
                  improve our data capturing methods. Coding correctly is vital
                  if we are to see improved patient care along with better data
                  analysis. DCS has developed hundreds of searches with high
                  sensitivity and specificity identifying patients who are not
                  detected by your system and thus receiving suboptimal care.
                  Improve patient care by proactively identifying patients with
                  chronic diseases who are being missed from regular reviews.
                  More accurate picture of the health needs in your locality.
                  Improved patient outcomes as those previously not identified
                  by the system will now become visibleto the clinicians.
                  Reduction in unplanned admissions. Prevent avoidable
                  morbidities and mortalities. Please contact us if you would
                  like us to run our Smart SearchesTM in your system and provide
                  you with a free data quality summary report with no obligation
                  to purchase the detailed report.
                </ReactReadMoreReadLess>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="service">
              <img src={docwithlaptop} alt=""></img>
              <h5>Demand & Capacity Modelling</h5>
              <p>
                <ReactReadMoreReadLess
                  readMoreClassName="readMoreClassName"
                  readLessClassName="readLessClassName"
                  charLimit={200}
                  readMoreText="Read More  ▲ "
                  readlessText="Read Lesss ▼ "
                >
                  Do you often feel that you offer enoughappointments, but
                  patients still feel discontent? Do you feel your workplace
                  needs significant change to improve patient access? DCS could
                  change the way you work and provide better patient access.
                  Analyse your demand and capacity data through our suite of
                  searches. Identify options on how you may want to handle
                  patient requests to free up face to face appointments. Improve
                  both clinical and administrative staff work / life balance.
                  Help practices improve their registers
                </ReactReadMoreReadLess>
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service">
              <img src={fileAway} alt=""></img>
              <h5>Document Management (File Away)</h5>
              <p>
                <ReactReadMoreReadLess
                  readMoreClassName="readMoreClassName"
                  readLessClassName="readLessClassName"
                  charLimit={200}
                  readMoreText="Read More  ▲ "
                  readlessText="Read Lesss ▼ "
                >
                  Did you know that an average GP would spend nearly 5 hours per
                  week filing documents? Would you like to change the process in
                  your practice to free up GP time whilst filing your documents
                  safely? DCS will provide training and support tools to
                  minimise GP time spent on filing documents. Learn how to
                  ensure quality assurance and clinical safety are met. Improve
                  both clinical and administrative staff work / life balance.
                  Reduce time (approximately 240 hours for 1 FTE GP per year)
                  and cost by working through a safe, effective and proven
                  process.
                </ReactReadMoreReadLess>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SmartTools;
