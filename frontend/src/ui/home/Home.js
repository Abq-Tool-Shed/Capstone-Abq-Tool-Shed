import React from "react"
import {NavBar} from '../Components/NavBar'
import {Container, Row, Col, Image} from "react-bootstrap";
import {HowItWorks} from "../Components/HowItWorks";
import toolSplash from "../Components/Images/lachlan-donald-unsplash.jpg"
import kitten1 from "../Components/Images/img.png"
import workingTogether from "../Components/Images/annie-gray-unsplash.jpg"
import "../Components/Styles/Home.style.css"
import homeStyles from "./home.module.css"
import mike1 from "../Components/Images/mzbrozek1.jpg"
import jon1 from "../Components/Images/jverduzco1.jpg"
import austin1 from "../Components/Images/austin-pro.jpg"


export function Home() {
    return (
        <>
        <body className={homeStyles.body}>
            <Container>
            <div>
                <header className={homeStyles.header}>
            <h1 className={"text-center "} >ABQ Tool Shed</h1>
                </header>
            </div>
            </Container>


            <div>
                <Container className={'bg-light p-4 m-3'}>
                    <Row className={"my-2"}>
                    <h2 className={"me-auto"} >How it works</h2>
                    </Row>
                    <Row className={"my-2"}>
                        <Col  md={"5"} m={"2"}>
                            <Image fluid src={workingTogether} alt={"tools from Unsplash photograph by annie-gray"}/>
                        </Col>
                        <Col md={"7"}>

                            <p>ABQ tool shed connects Albuquerque community members with the tools they need. </p>
                            <p>Save money, share knowledge and build community</p>
                            <ul>
                                <li>Create a profile, and fill your Tool Box with your garden sheers, chainsaw or air compressor</li>
                                <li>Browse tools in your community and Connect with members offering to lend a tool in your area</li>
                                <li>Request to borrow tools, let people know about your project and your timeline</li>
                                <li>Return the tool when the project is finished</li>
                                <li>Be sure to leave a rating once the tool is returned</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div> {/* End How it Works content */}

                <Container>
                    <h1>Recent tools available for lend</h1>
                    <Col className={"border border-2 rounded border-secondary bg-light py-2"} md={"4"}>
                        <Row>
                            <Col className={'text-start pe-5'} md={8}>
                                <h5>Available</h5>
                            </Col>
                            <Col className={'text-center'} md={4}>
                                <h5>Tool location</h5>
                            </Col>
                        </Row>
                        <Image  fluid rounded src={kitten1} alt={"kitten"}/>
                        <div className={'text-center'}>
                            <p>toolName</p>
                            <p>time since listing (eg. 5 days ago)</p>
                        </div>
                    </Col>


                </Container> {/* Featured tool listings */}

              <div>
                  <Container className={"mission"}>
                      <Row className="ms-auto">
                          <h2>Mission Statement</h2>
                      </Row>
                      <Row className="view rounded z-depth-5 m-3">
                          <Image fluid className={"mx-auto"} src={toolSplash} alt={"tools from Unsplash photograph by lachlan-donald"}/>
                              <div className="mask">
                                  <p className="font-weight-bold h5 ml-3"> ABQ tool shed saves homeowners money by offering them an option outside of the big box stores.</p>

                                  <p className="font-weight-bold h5 ml-3"> To get tools out of the garage and into people's hands. </p>
                                  <p className="font-weight-bold h5 ml-3"> From cutting tile to cutting the lawn, people should have access to the tools they need to get the job done.</p>
                              </div>
                         <Row>
                          <Col>
                              <p>ABQ tool shed saves homeowners money by offering them an option outside of the big box stores.</p>
                              <p> To get tools out of the garage and into people's hands. </p>
                              <p>From cutting tile to cutting the lawn, people should have access to the tools they need to get the job done. </p>
                          </Col>
                         </Row>
                      </Row>
                  </Container>
              </div>

            <div>
                <Container>
                    <Row>
                        <h2>FAQ</h2>
                    </Row>
                    <Row>
                        <Col>


                        </Col>
                    </Row>

                </Container>

            </div> {/* End FAQ Content */}


            <div className={"bg-black"} >
                <Container>
                    <Row>
                        <h2>About our team</h2>

                        <Col className={"border border-2 rounded border-light bg-white py-2"} md={"4"}>
                            <Image className={"d-block mx-auto"} fluid rounded src={austin1} alt={"Austin Dewey"}/>
                            <div className={"bg-secondary rounded mt-5"}>
                                <p>What a cute kitten</p>
                            </div>
                        </Col>
                        <Col className={"border border-2 rounded border-light bg-white py-2"} md={"4"}>
                            <Image className={"d-block mx-auto"} fluid rounded src={jon1} alt={"John Verduzco"}/>
                            <div className={"bg-secondary rounded mt-5"}>
                                <p>What a cute kitten</p>
                            </div>
                        </Col>
                        <Col className={"border border-2 rounded border-light bg-white py-2"} md={"4"}>
                            <Image className={"d-block mx-auto"} fluid rounded src={mike1} alt={"Mike Zbrozek"}/>
                            <div className={ "rounded"}>
                                <p>Full stack developer. Albuquerque resident, inspired by community solutions and empowerment. Don't leave your burrito unattended.</p>
                            </div>
                        </Col>
                    </Row>

                </Container> {/* End about us content */}
            </div>


        </body>
            </>
    )
}




