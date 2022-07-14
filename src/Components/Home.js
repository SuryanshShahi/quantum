import React from "react";
import bg from "./Images/bg1.png";
import work from "./Images/work.png";

function Home() {
  return (
    <section id="homeMargin">
      <div id="home">
        <div className="container px-lg-5">
          <div className="mx-lg-5 d-flex align-items-center h-100">
            <div className=" py-lg-0 py-5">
              <div style={{ fontWeight: "500" }}>
                Ki Name Dhake Bolbo Tomake
              </div>
              <div
                className="font-weight-bolder pb-2"
                style={{ fontSize: "48px" }}
              >
                We Are Consulting For Your Business Finances
              </div>
              <div className="pb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
              <div className="btn btn-info mt-4">Start Now</div>
            </div>
            <div className="mt-auto">
              <img src={bg} style={{ height: "29vw" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-lg-5 pb-5">
        <div className="mx-lg-5 my-5 d-flex align-items-center h-100">
          <div className="mr-lg-5">
            <div
              className="font-weight-bolder pb-2"
              style={{ fontSize: "30px" }}
            >
              We Have Many Year Experience In Consuntent Business
            </div>
            <div className="pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div className="btn btn-info mt-4">Know More</div>
          </div>
          
          <div className="align-items-center d-flex">
          <div className="" style={{    padding: "0px 27px"}}>
            <div className="position-absolute ml-lg-0 ml-md-2 ml-sm-2 ml-3">
              <span
                className="fa fa-play-circle-o bg-info text-white px-1"
                style={{ borderRadius: "100%", zIndex:"1", fontSize:"4.5vw" }}
              ></span>
            </div>
          </div>
            <img src={work} className="position-relative" style={{ height: "25vw",zIndex:"-1" }} />
          </div>
        </div>
        <div className="mx-lg-5 row font-weight-bolder">
          <div className="col-lg-3 col-md-4 col-6 pb-lg-0 pb-4 text-center">
            <div className="fa fa-gears"></div>
            <div style={{ fontSize: "19px" }}>
              Construct<span style={{ color: "grey" }}>ion</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 pb-lg-0 pb-4 text-center">
            <div className="fa fa-cloud"></div>
            <div style={{ fontSize: "19px" }}>
              DUMMY-<span style={{ color: "grey" }}>LOGO</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 pb-lg-0 pb-4 text-center">
            <div className="fa fa-glass"></div>
            <div style={{ fontSize: "19px" }}>
              <span style={{ color: "grey" }}>Random</span>Logo
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 pb-lg-0 pb-4 text-center">
            <div className="fa fa-wrench"></div>
            <div style={{ fontSize: "19px" }}>
              <span style={{ color: "grey" }}>Random</span>Brand
            </div>
          </div>
        </div>
      </div>

      <div id="home">
        <div className="container px-lg-5 py-5">
          <div className="mx-lg-5 d-flex align-items-center h-100">
            <div className="py-lg-0 py-5">
              <div
                className="justify-content-center d-flex"
                style={{ fontSize: "30px" }}
              >
                <div className="text-center w-75">
                  <b>Our Services</b>
                  <hr
                    className="mx-auto text-success"
                    style={{ width: "100px", height:"2px", margin:"20px" }}
                  ></hr>
                  <div
                    className="pb-5"
                    style={{ fontSize: "19px", fontWeight: "500" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                  </div>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="justify-content-center d-flex">
                    <div
                      className="justify-content-center align-items-center d-flex bg-white"
                      style={{
                        borderRadius: "50%",
                        width: "fit-content",
                        padding: "40px",
                        zIndex: "1",
                        boxShadow: "0px 0px 2px 1px #80808047",
                      }}
                    >
                      <div className="fa fa-handshake-o fa-2x text-info position-absolute"></div>
                    </div>
                  </div>
                  <div
                    className="position-relative px-3 bg-white pb-5 cardhover"
                    style={{
                      top: "-39px",
                      boxShadow: "0px 0px 3px 2px #80808047",
                    }}
                  >
                    <div
                      className="text-center"
                      style={{ fontWeight: "500", paddingTop: "83px" }}
                    >
                      Financial Consulting
                    </div>
                    <div className="text-center">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="justify-content-center d-flex">
                    <div
                      className="justify-content-center align-items-center d-flex bg-white"
                      style={{
                        borderRadius: "50%",
                        width: "fit-content",
                        padding: "40px",
                        zIndex: "1",
                        boxShadow: "0px 0px 2px 1px #80808047",
                      }}
                    >
                      <div className="fa fa-bullhorn text-info fa-2x position-absolute"></div>
                    </div>
                  </div>
                  <div
                    className="position-relative px-3 bg-white pb-5 cardhover"
                    style={{
                      border: "2px solid #17a2b8",
                      top: "-39px",
                      boxShadow: "0px 0px 3px 2px #80808047",
                    }}
                  >
                    <div
                      className="text-center"
                      style={{ fontWeight: "500", paddingTop: "83px" }}
                    >
                      Content Marketing
                    </div>
                    <div className="text-center">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="justify-content-center d-flex">
                    <div
                      className="justify-content-center align-items-center d-flex bg-white"
                      style={{
                        borderRadius: "50%",
                        width: "fit-content",
                        padding: "40px",
                        zIndex: "1",
                        boxShadow: "0px 0px 2px 1px #80808047",
                      }}
                    >
                      <div className="fa fa-money text-info fa-2x position-absolute"></div>
                    </div>
                  </div>
                  <div
                    className="position-relative px-3 bg-white pb-5 cardhover"
                    style={{
                      top: "-39px",
                      boxShadow: "0px 0px 3px 2px #80808047",
                    }}
                  >
                    <div
                      className="text-center"
                      style={{ fontWeight: "500", paddingTop: "83px" }}
                    >
                      Fiannce Advice
                    </div>
                    <div className="text-center">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center py-2">
                <div className="btn btn-info px-3">All Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
