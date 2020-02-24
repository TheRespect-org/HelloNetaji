import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class Petition extends React.Component {
    filePetition(e) {
        e.preventDefault();

        axios.post('http://hellonetaji.therespect.org/api/petitions', {
            Name: e.target.Name.value,
            Email: e.target.Email.value,
            ActionArea: e.target.ActionArea.value,
            Sections: e.target.Sections.value,
            CaseConsent: e.target.CaseConsent.value,
            Phone: e.target.Phone.value,
            Address: e.target.Address.value,
            Action: e.target.elements[3].value,
            PinCode: e.target.PinCode.value
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log('An error occured')
            })

        let mailToLink = encodeURI(
            `mailto:chiefminister@maharashtra.gov.in,cm@maharashtra.gov.in?cc=adityathackeray@me.com,bbtsangamner@gmail.com,pawars@sansad.nic.in,sec_socjustice@maharashtra.gov.in
&subject=Petition to pass a resolution against CAA, NRC and NPR
&body=Dear Sir,\n
        
We the people of Maharashtra have deep faith in the MVA government. We hope that the government will listen to the voices of the people protesting against CAA, NRC and NPR across Maharashtra as well as across India and worldwide.\n
We sincerely request you to kindly pass an anti-CAA resolution in the Maharashtra assembly. Also, do stop the process of NPR as NPR is the base of NRC.\n
        
Thanks and regards,\n        
${e.target.Name.value}`);

        window.location.href = mailToLink;
    }

    render() {
        return (
            <div>
                <p data-toggle="collapse" data-target="#demo"><button class="btn btn-primary"> Click here to submit your input to the Maharashtras government</button> </p>

                <Form id="demo" className="collapse" onSubmit={this.filePetition}>
                    <sub>*This will generate an automated email. Also, if you have been detained, issued FIR/notice by Mumbai Police during AntiCAA protests from 19th Dec 2019 till date, please submit those details too.</sub>
                    <div className="row">
                        <div className="col-md-4"><Form.Group>
                            <Form.Control name="Name" type="text" placeholder="Name*" required />
                        </Form.Group>
                        </div>
                        <div className="col-md-4"> <Form.Group>
                            <Form.Control name="Email" type="email" placeholder="Email*" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                        </Form.Group>
                        </div>
                        <div className="col-md-4">
                            <Form.Group>
                                <Form.Control name="Phone" type="text" placeholder="Phone*" required />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Form.Group>
                                <Form.Text className="text-muted">
                                    Has Police taken any of the following action on you?
                                </Form.Text>
                                <Form.Check name="Action" className="d-inline" type='checkbox' id={`Detained`} label={`Detained`} value="Detained" />
                                <Form.Check name="Action" className="d-inline" type='checkbox' id={`NoticeIssued`} label={`Notice Issued`} value="NoticeIssued" />
                                <Form.Check name="Action" className="d-inline" type='checkbox' id={`FIR`} label={`FIR`} value="FIR" />
                            </Form.Group>
                        </div>

                        <div className="col-md-4">
                            <Form.Group>
                                <Form.Text className="text-muted">
                                    Will you consent to a collective suit filed on behalf of you & others in a Court of law?
                                </Form.Text>
                                <Form.Check name="CaseConsent" className="d-inline" type='radio' id={`Yes`} label={`Yes`} value="Yes" />
                                <Form.Check name="CaseConsent" className="d-inline" type='radio' id={`No`} label={`No`} value="No" />
                            </Form.Group>
                        </div>

                        <div className="col-md-4">
                            <Form.Group>
                                <Form.Control name="ActionArea" type="text" placeholder="Police Station / Area where this action was taken on you (optional)" required />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-4">
                            <Form.Group>
                                <Form.Control name="Sections" type="text" placeholder="Specify sections slapped on you (optional)" required />
                            </Form.Group>
                        </div>

                        <div className="col-md-4">
                            <Form.Group>
                                <Form.Control name="PinCode" type="text" placeholder="Pin code (optional)" />
                            </Form.Group>
                        </div>

                        <div className="col-md-4">
                            <Form.Group>
                                <Form.Control name="Address" type="text" placeholder="Address (optional)" />
                            </Form.Group>
                        </div>
                    </div>

                    <Button variant="primary" type="submit"> Send email </Button>

                </Form>
            </div>);
    }
}