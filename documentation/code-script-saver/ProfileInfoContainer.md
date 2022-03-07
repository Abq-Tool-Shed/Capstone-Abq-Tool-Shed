  
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