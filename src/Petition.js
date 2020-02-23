import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Petition extends React.Component {
    filePetition(e) {
        e.preventDefault();
        console.log(e.target.name.value);
        // console.log(e.target.email.value);
        // console.log(e.target.pincode.value);
        // console.log(e.target.phone.value);
        // debugger

        let mailToLink = encodeURI(
            `mailto:chiefminister@maharashtra.gov.in,cm@maharashtra.gov.in?cc=adityathackeray@me.com,bbtsangamner@gmail.com,pawars@sansad.nic.in,sec_socjustice@maharashtra.gov.in
&subject=Petition to pass a resolution against CAA, NRC and NPR
&body=Dear Sir,\n
        
We the people of Maharashtra have deep faith in the MVA government. We hope that the government will listen to the voices of the people protesting against CAA, NRC and NPR across Maharashtra as well as across India and worldwide.\n
We sincerely request you to kindly pass an anti-CAA resolution in the Maharashtra assembly. Also, do stop the process of NPR as NPR is the base of NRC.\n
        
Thanks and regards,\n        
${e.target.name.value}`);

        window.location.href = mailToLink;
    }

    render() {
        debugger
        console.log('Neta', this.params);

        return (
            <div >
                <p>Enter your name to file a petition to Maharashtra's MVA government!</p>

                <Form onSubmit={this.filePetition}>
                    <div className="row">
                        {/* <div className="col-md-6"> */}
                        <div className="col-md-4">
                            <Form.Label>Enter your name</Form.Label>
                        </div>

                        <div className="col-md-4">
                            <Form.Group>
                                <Form.Control name="name" type="text" placeholder="name*" required />
                            </Form.Group>
                        </div>

                        <div className="col-md-4">
                            <Button variant="primary" type="submit"> Submit petition </Button>
                        </div>


                        {/* <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="email*" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
    </Form.Text>
                            </Form.Group> */}
                        {/* </div> */}
                        {/* <div className="col-md-6">
                            <Form.Group>
                                <Form.Label>Pin code</Form.Label>
                                <Form.Control name="pincode" type="text" placeholder="pin code" required />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control name="phone" type="text" placeholder="Phone" required />
                            </Form.Group>

                        </div> */}

                    </div>
                </Form>



            </div>);
    }
}