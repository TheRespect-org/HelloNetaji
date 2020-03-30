import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

let petitionsCount = 0;
export default class Petition extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            petitionsCount: 0
        }
    }

    async getPetitionsCount() {
        try {

            const response = await axios.get(`//hellonetaji.therespect.org/api/petitions/count`);

            debugger
            if (response.status === 200) {
                /* Map the response to IShariahStocks */
                
                petitionsCount = response.data.petitionsCount;
                this.setState({ petitionsCount });
            }

        } catch (ex) {
            console.log(ex);
            this.setState({ error: 'An error occured' });
        }
    }

    componentWillMount() {
        this.getPetitionsCount();
    }

    filePetition(e) {
        e.preventDefault();

        axios.post('http://hellonetaji.therespect.org/api/petitions', {
            Name: e.target.Name.value,
            Email: e.target.Email.value,
            Phone: e.target.Phone.value
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

                {this.state.petitionsCount} petitions so far!
                <p data-toggle="collapse" data-target="#demo"><button class="btn btn-primary"> Click here to submit your petition to the Maharashtra government</button> </p>

                <Form id="demo" className="collapse" onSubmit={this.filePetition}>
                    <sub>*This will generate an automated email.</sub>
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
                                <Form.Control name="Phone" type="text" placeholder="Phone (optional)" />
                            </Form.Group>
                        </div>
                    </div>

                    <Button variant="primary" type="submit"> Send email </Button>

                </Form>
            </div>);
    }
}