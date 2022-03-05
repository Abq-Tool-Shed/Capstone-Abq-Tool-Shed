import React from "react"
import {NavBar} from '../Components/NavBar'
import {Container, Row, Col, Image} from "react-bootstrap";
import {HowItWorks} from "../Components/HowItWorks";
import toolSplash from "../Components/Images/lachlan-donald-unsplash.jpg"
import kitten1 from "../Components/Images/img.png"
import workingTogether from "../Components/Images/annie-gray-unsplash.jpg"






export function Home() {
    return (
        <>
            <Container>
            <div>
                <header  style={{padding: 50,color: 'black',backgroundImage: 'url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_494605768_2000133320009280151_316966.jpg)'}}>
            <h1 className={"text-center"}>ABQ Tool Shed</h1>
                </header>
            </div>
            </Container>


            <div>
                <Container>
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
                                <li>Create a profile, and fill you Tool Box with your garden sheers, chainsaw or air compressor</li>
                                <li>Connect with members offering to lend a tool in your area</li>
                                <li>Message them privately through our secure app</li>
                                <li>Be sure to leave a rating once the tool is returned</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div> {/* End How it Works content */}

                <Container>
                    <h1>Placeholder for featured tool listings</h1>
                </Container> {/* Featured tool listings */}

              <div>
                  <Container>
                      <Row className="ms-auto">
                          <h2>Mission Statement</h2>
                      </Row>
                      <Row class="view rounded z-depth-1 m-3">
                          <Image fluid className={"mx-auto"} src={toolSplash} alt={"tools from Unsplash photograph by lachlan-donald"}/>
                          <a>
                              <div className="mask purple-gradient-rgba d-flex align-items-end justify-content-start text-white">
                                  <p className="font-weight-bold h5 ml-3"> ABQ tool shed saves homeowners money by offering them an option outside of the big box stores.</p>

                                  <p className="font-weight-bold h5 ml-3"> To get tools out of the garage and into people's hands. </p>
                                  <p className="font-weight-bold h5 ml-3"> From cutting tile to cutting the lawn, people should have access to the tools they need to get the job done.</p>
                              </div>
                          </a>
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


            <div className={"bg-secondary"} >
                <Container>
                    <Row>
                        <h2>About our team</h2>

                        <Col md={"3"}>
                            <Image className={"d-block mx-auto"} fluid roundedCircle src={kitten1} alt={"kitten"}/>
                            <div className={"bg-secondary rounded mt-5"}>
                                <p>What a cute kitten</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={"8"}>
                            <div className={"border border-2 rounded border-dark bg-gradient"}>
                            <Row>
                                <Col>
                                    <h4>Austin Dewey</h4>
                                </Col>
                                <Col>
                                    <p>test</p>
                                </Col>
                                {/*linkedIn profile links will go next to your name*/}
                            </Row>
                                <Col>
                                <p>Short bio statement, with an interesting quirk about you.</p>
                                </Col>
                            </div>
                        </Col>
                        <Col md={'2'}>
                            <Image className={"my-auto"} fluid roundedCircle src={kitten1} alt={"image of Austin"}/>
                        </Col>

                        <Row>
                            <Col md={'2'}>
                                <Image className={"my-auto"} fluid roundedCircle src={kitten1} alt={"image of Jon"}/>
                            </Col>
                            <Col md={"8"}>
                                <div className={"border border-2 rounded border-dark bg-gradient"}>
                                <Row>
                                    <Col>
                                        <h4> Jon Verduzco </h4>
                                    </Col>
                                    <Col>
                                        <p>test</p>
                                    </Col>
                                    {/*linkedIn profile links will go next to your name*/}
                                </Row>
                                </div>
                                <Col>
                                    <p>Short bio statement, with an interesting quirk about you.</p>
                                </Col>

                            </Col>
                        </Row>
                        <Row >
                            <Col md={'8'}>
                                <Row>
                                    <Col>
                                    <h4> Mike Zbrozek </h4>
                                    </Col>
                                    <Col>
                                    <p>test</p>
                                    </Col>
                                    {/*linkedIn profile links will go next to your name*/}
                                </Row>
                                <p>Full stack developer. Albuquerque resident, inspired by community solutions and empowerment. Has concerns about lending his circular saw on this site.</p>
                            </Col>
                        <Col md={'2'}>
                            <Image className={"my-auto"} fluid roundedCircle src={kitten1} alt={"image of Mike"}/>
                        </Col>

                        </Row>

                    </Row>
                </Container> {/* End about us content */}
            </div>


        </>
    )
}




