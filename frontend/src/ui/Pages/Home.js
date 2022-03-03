import React from "react"
import {NavBar} from '../Components/NavBar'
import {Container, Row, Col} from "react-bootstrap";
import {HowItWorks} from "../Components/HowItWorks";
import toolSplash from "../images/lachlan-donald-YVT5aF2QM7M-unsplash "





export function Home() {
    return (
        <>
            <Container>
            <div>
                <header  style={{padding: 50,color: 'black',backgroundImage: 'url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_494605768_2000133320009280151_316966.jpg)'}}>
            <h1 className={"text-center"} >ABQ Tool Shed</h1>
                </header>
            </div>
            </Container>


            <div>
                <Container>
                    <Row>
                        <Col>
                            <h2>How it works</h2>
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
            </div>

                <Container>
                    <h1>Placeholder for featured tool listings</h1>
                </Container>

              <div>
                  <Container>
                      <Row className="ms-auto">
                          <h2>Mission Statement</h2>
                      </Row>
                      <Row>
                          <Image fluid className={"mx-auto"} src={toolSplash}></Image>
                          <Col>

                          </Col>
                      </Row>
                  </Container>
              </div>




        </>
    )
}




