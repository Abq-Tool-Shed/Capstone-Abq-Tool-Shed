import React, {useEffect} from "react"
import {NavBar} from '../Components/NavBar'
import {Container, Row, Col, Image} from "react-bootstrap";
import {HowItWorks} from "../Components/HowItWorks";
import toolSplash from "../Components/Images/lachlan-donald-unsplash.jpg"
import kitten1 from "../Components/Images/img.png"
import workingTogether from "../Components/Images/annie-gray-unsplash.jpg"
// import "../Components/Styles/Home.style.css"
import homeStyles from "./home.module.css"
import mike1 from "../Components/Images/mzbrozek1.jpg"
import jon1 from "../Components/Images/jverduzco1.jpg"
import austin1 from "../Components/Images/austin-pro.jpg"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllToolsAndBorrows} from "../../store/tools";
import {Tool} from "../Components/Post/Tool";


export function Home() {

    const tools = useSelector(state => state.tools ? state.tools : []);

    const dispatch = useDispatch();

    function sideEffects() {
        dispatch(fetchAllToolsAndBorrows())
    }

    useEffect(sideEffects, [dispatch]);
    console.log(tools)


    return (
        <>
            <div className={homeStyles.header}>
            <Container>
                <header >
            <h1 className={"text-center pb-4"} >ABQ Tool Shed</h1>
                    <h2 className={"text-start pb-2 "} >A neighborhood resource for borrowing tools</h2>
                    <h2 className={"text-center p-4 "} >To complete your project</h2>
                    <h2 className={"text-end p-3 "} >Save money and build community</h2>
                </header>
            </Container>
            </div>



            <div>
                <Container className={'p-4 m-3'}>
                    <Row className={"my-2"}>
                    <h2 className={"text-black me-auto"} >How it works</h2>
                    </Row>
                    <Row className={"bg-dark text-white my-2"}>
                        <Col  md={"5"} m={"2"}>
                            <Image fluid className={"my-4"} src={workingTogether} alt={"tools from Unsplash photograph by annie-gray"}/>
                        </Col>
                        <Col className={"my-4"} md={"7"}>

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

                    <Row>
                        {tools.map((tool, index) => <Tool key={index} tool={tool}/>)}
                    </Row>







                </Container> {/* Featured tool listings */}

              <div>
                  <Container className={"mission"}>
                      <Row className="ms-auto">
                          <h2>Mission Statement</h2>
                      </Row>
                      <Row className="bg-dark text-white view rounded z-depth-5 ms-5">
                          {/*<Image fluid className={"mx-auto"} src={toolSplash} alt={"tools from Unsplash photograph by lachlan-donald"}/>*/}
                              <div className="mask text-end">
                                  <p className="font-weight-bold h3 ml-3"> From cutting tile to cutting the lawn, people should have access to the tools they need to get the job done.</p>
                                  <p className="font-weight-bold h5 ml-3"> ABQ tool shed saves homeowners money by offering them an option outside of the big box stores.</p>

                                  <p className="font-weight-bold h5 ml-3"> To get tools out of the garage and into people's hands. </p>

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
                            <Image className={"d-block mx-auto"} fluid rounded src={jon1} alt={"Jon Verduzco"}/>
                            <div className={"bg-secondary rounded mt-5"}>
                                <p>Aspiring software developer looking to build useful and inspiring things. Based in Albuquerque and interested in music, design and new technologies among other things.</p>
                            </div>
                        </Col>
                        <Col className={"border border-2 rounded border-light bg-white py-2"} md={"4"}>
                            <Image className={"d-block mx-auto"} fluid rounded src={mike1} alt={"Mike Zbrozek"}/>
                            <div className={ "rounded"}>
                                <p>Full stack developer inspired by community solutions and empowerment. Believes human energy is clean energy.</p>
                            </div>
                        </Col>
                    </Row>

                </Container> {/* End about us content */}
            </div>



            </>
    )
}




