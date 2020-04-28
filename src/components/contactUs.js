import React from "react"
import test from "../images/square.png"

import { Form, Header, Footer, Row, Col } from "react-bootstrap"
const ContactUs = (props) => {
    return (

        <div className="row contactUs">


            <div className="col-lg-6 col-md-6 col-sm-6 contactForm">
                <h2>Contact Us</h2>
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="sm" lg={2}> First Name </Form.Label>
                        <Col>
                            <Form.Control size="sm" type="text" placeholder="First Name" />
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Form.Label column="sm" lg={2}> Last Name </Form.Label>
                        <Col>
                            <Form.Control size="sm" type="text" placeholder="Last Name" />
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Form.Label column="sm" lg={2}> Email </Form.Label>
                        <Col>
                            <Form.Control size="sm" type="text" placeholder="Email" />
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Form.Label column="sm" lg={2}> Message </Form.Label>
                        <Col>
                            <Form.Control size="sm" as="textarea" rows="10" placeholder="Message" />
                        </Col>
                    </Form.Row>
                </Form.Group>
            </div>




        </div>
    )
}

export default ContactUs



