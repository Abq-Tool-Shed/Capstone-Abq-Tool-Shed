import React, {useEffect} from "react"
import {NavBar} from '../Components/NavBar'
import {Container, Row, Col, Image, NavLink} from "react-bootstrap";
import toolSplash from "../Components/Images/lachlan-donald-unsplash.jpg"
import workingTogether from "../Components/Images/annie-gray-unsplash.jpg"
// import "../Components/Styles/Home.style.css"
import colorStyles from "../styles/shared/colors.module.css"
import homeStyles from "./home.module.css"
import mike1 from "../Components/Images/mzbrozek1.jpg"
import jon1 from "../Components/Images/jverduzco1.jpg"
import austin1 from "../Components/Images/austin-pro.jpg"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllToolsAndBorrows} from "../../store/tools";
import {Tool} from "../Components/Post/Tool";
import {Jumbo} from "../Components/Shared/Jumbo";
import {ProfileJumbo} from "../Components/Shared/ProfileJumbo";
import {BackgroundJumbo} from "../Components/Shared/BackgroundJumbo";
import {Link} from "react-router-dom";



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
            <BackgroundJumbo
                display1=" ABQ Tool Shed 🛠"
                heading2="A neighborhood resource for borrowing tools"
                heading3="To complete your project"
                heading4="save money and build community"
            />
            {/*<Container>*/}
            {/*    <header >*/}
            {/*<h1 className={"text-center pb-4"} >ABQ Tool Shed</h1>*/}
            {/*        <h2 className={"text-start pb-2 "} >A neighborhood resource for borrowing tools</h2>*/}
            {/*        <h2 className={"text-center p-4 "} >To complete your project</h2>*/}
            {/*        <h2 className={"text-end p-3 "} >Save money and build community</h2>*/}
            {/*    </header>*/}
            {/*</Container>*/}


            <div>
                <Container className={'p-4 m-3'}>
                    <Row className={"my-2"}>
                        <h2 className={"text-black me-auto"}>How it works</h2>
                    </Row>
                    <Row className={"bg-dark text-white my-2"}>
                        <Col md={"5"} m={"2"}>
                            <Image fluid className={"my-4"} src={workingTogether}
                                   alt={"tools from Unsplash photograph by annie-gray"}/>
                        </Col>
                        <Col className={"my-4"} md={"7"}>

                            <p>ABQ tool shed connects Albuquerque community members with the tools they need. </p>
                            <p>Save money, share knowledge and build community</p>
                            <ul>
                                <li>Create a profile, and fill your Tool Box with your garden sheers, chainsaw or air
                                    compressor
                                </li>
                                <li>Browse tools in your community and Connect with members offering to lend a tool in
                                    your area
                                </li>
                                <li>Request to borrow tools, let people know about your project and your timeline</li>
                                <li>Return the tool when the project is finished</li>
                                <li>Be sure to leave a rating once the tool is returned</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* End How it Works content */}

            <Container>
                <h1>Recent tools available for lend</h1>

                <Row>
                    {tools.slice(0, 2).map((tool, index) => <Tool key={index} tool={tool}/>)}
                </Row>


            </Container> {/* Featured tool listings */}

            <div>
                <Container className={"mission my-2"}>

                    <Row className="bg-dark text-white view rounded z-depth-5 ms-5">
                        <h2 className="ms-auto">Our Mission</h2>
                        {/*<Image fluid className={"mx-auto"} src={toolSplash} alt={"tools from Unsplash photograph by lachlan-donald"}/>*/}

                        <Row>
                            <Col>
                                <h5>People should have access to the tools they need to get the job done.</h5>
                                <p>ABQ tool shed saves homeowners money by offering them an option outside of the big
                                    box stores.</p>
                                <p> To get tools out of the garage and into people's hands. </p>
                                <p>From cutting tile to cutting the lawn, people should have access to the tools they
                                    need to get the job done. </p>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div>

            <div>
                <Container>

                    <Row>
                        <Col>


                        </Col>
                    </Row>

                </Container>

            </div>
            {/* End FAQ Content */}


            <div className={colorStyles.blue2}>

                    <Row className={'text-white'}>
                        <h2>About our team</h2>
                    </Row>
                    <Row className={""}>
                        <Col md={2}></Col>
                        <Col className={"border border-2 rounded border-light bg-white py-2 mx-2"} md={"3"}>
                            <h3>Austin Dewey</h3>
                            <Image className={" mx-auto"} fluid rounded src={austin1} alt={"Austin Dewey"}/>
                            <div className={"rounded mt-3"}>
                                <p>Software Developer, Video game Developer, Photographer, Sound Engineer, based out of
                                    Albuquerque New Mexico looking for a way to shape the future with technology to
                                    inspire and spark imagination.</p>
                                <Row pt-5>
                                    <h5>robogingerbetic@gmail.com</h5>
                                    <a
                                        className='Link to linked in'
                                        href="https://www.linkedin.com/in/austin-dewey-58663222a/"
                                        target='_blank'
                                        rel="noopener"
                                        aria-label='Github'
                                    >https://www.linkedin.com/in/austin-dewey-58663222a/
                                    </a>
                                    <p>Austin's Personal Page</p>
                                    <a
                                        className='Personal Page'
                                        href="https://www.westernpixelstudios.com"
                                        target='_blank'
                                        rel="noopener"
                                        aria-label='Github'
                                    >Westernpixelstudios.com
                                    </a>
                                </Row>
                            </div>
                        </Col>
                        <Col className={"border border-2 rounded border-light bg-white py-2 mx-2"} md={"3"}>
                            <h3>Jon Verduzco</h3>
                            <Image className={"d-block mx-auto pt-2"} fluid rounded src={jon1} alt={"Jon Verduzco"}/>
                            <div className={"rounded mt-3"}>
                                <p>Aspiring software developer looking to build useful and inspiring things. Based in
                                    Albuquerque and interested in music, design and new technologies among other
                                    things.</p>
                                <Row>
                                <h5>jonathanv0022@gmail.com</h5>
                                <a
                                    className='Link to linked in'
                                    href="https://www.linkedin.com/in/jonathan-verduzco/"
                                    target='_blank'
                                    rel="noopener"
                                    aria-label='Github'
                                >https://www.linkedin.com/in/jonathan-verduzco/
                                </a>
                                    <p>Jon's Personal Page</p>
                                    <a
                                        className='Personal Page'
                                        href="https://www.jonathanverduz.co"
                                        target='_blank'
                                        rel="noopener"
                                        aria-label='Github'
                                    >jonathanverduz.co
                                    </a>
                                </Row>
                            </div>
                        </Col>
                        <Col className={"border border-2 rounded border-light bg-white py-2 mx-2"} md={"3"}>
                            <h3>Mike Zbrozek</h3>
                            <Image className={"d-block mx-auto pt-5"} fluid rounded src={mike1} alt={"Mike Zbrozek"}/>
                            <div className={"rounded mt-3"}>
                                <p className={"mb-5"}>Full stack developer inspired by community solutions and empowerment. Believes human
                                    energy is clean energy.</p>
                                <Row pt-5>
                                <h5>MCZbrozek@gmail.com</h5>
                                <a
                                    className='Link to linked in'
                                    href="www.linkedin.com/in/michaelzbrozek"
                                    target='_blank'
                                    rel="noopener"
                                    aria-label='Github'
                                >www.linkedin.com/in/michaelzbrozek </a>

                                    <p>Mike's Personal Page</p>
                                    <a
                                        className='Personal Page'
                                        href="https://www.mikezbrozek.com"
                                        target='_blank'
                                        rel="noopener"
                                        aria-label='Github'
                                    >MikeZbrozek.com

                                    </a>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                {/* End about us content */}
            </div>


        </>
    )
}




