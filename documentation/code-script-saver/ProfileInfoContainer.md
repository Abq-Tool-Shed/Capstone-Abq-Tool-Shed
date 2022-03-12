  
this is the Status Section 


       <div className="container text-center text-light border border-2 border-secondary bg-secondary">
                <div className="row">
                    <p className="col fs-2"> Tools Borrowed:5</p>
                    <p className="col fs-2">Tools Lent:5</p>
                    <p className="col fs-2">User Rating:3/5</p>
                </div>
            </div>






this is the Profile Image 


            <div className="mt-5 text-center">
                <ImageDropZone/>
            </div>


This is the Bio Section 

            <div className="w-25 mt-2">
                <h2 className="text-center">BIO | TELL US ABOUT YOU!</h2>
                <Form className="border border-secondary border-3">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter Your Bio Info Here</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <button>Save</button>
                </Form>
            </div>



Profile Section Content Before Implement

        <Container >

            <div>
                {profile && <Profile profile={profile}/>}
            </div>
            <div className="me-5">
                <Link to="/user-settings">
                    <Button   size="lg">
                        Settings Page
                    </Button>
                </Link>
            </div>
            <br/>
            <div className="row">
                <div className=" col">
                    {/*    Image Place   */}
                </div>
                <div className="col">
                    <h2 className="text-center">Austins BIO</h2>
                    {/*<div> {profiles.map((profile, index) => <Profile key={index} profile={profile}/>)} </div>*/}
                </div>
                <div style={{border: "transparent 75", height: 150, width: 250}} className="col">
                    <h2>User Status</h2>
                    <p>
                        Tools Borrowed:5 |
                        Tools Lent:5 |
                        User Rating:3/5
                    </p>
                </div>
            </div>

        </Container>

            <Container>
                <div className='row mt-5'>
                    <div style={{margin: "auto",width: 250}} className="col-2 bg-secondary text-light border border-secondary text-center">
                        <p>Welcome to your content section! <br/> On the right you will find a place to start your posting journey. </p>
                    </div>
                    <div style={{margin: "auto",width: 250, height: 150, padding:25}} className="col-2 bg-secondary  border border-secondary text-center">
                        <ProfilePostButton/>
                    </div>
                </div>
                <br>
                </br>
                <div className="row mt-5">
                    <div style={{margin: "auto",  width: 250}} className="col-2 border border-secondary text-center">
                        <h1>POST HERE</h1>
                    </div>
                    <div style={{margin: "auto",  width: 250}} className="col-2 border border-secondary text-center">
                        <h1>POST HERE</h1>
                    </div>
                    <div  style={{margin: "auto",  width: 250}} className="col-2 border border-secondary text-center">
                        <h1>POST HERE</h1>
                    </div>
                </div>
            </Container>


BACKA

from: ` ${name} <postmaster@${process.env.MAILGUN_DOMAIN}>`,
