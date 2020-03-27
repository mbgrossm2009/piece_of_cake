import React from "react"
import styles from "../styles/contactUs.scss"
import test from "../images/square.png"

import { Form, Header, Footer, Row, Col } from "react-bootstrap"
const ContactUs = (props) => {
    return (
        <div>
            <h1> Contact Us </h1>
            <div className="row contactUs">

                <div className="col-lg-8 col-md-8 col-sm-8 contactForm">
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
                                <Form.Control size="sm" as="textarea" placeholder="Message" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </div>
                <img className="col-lg-4" src={test} />
            </div>



        </div>
    )
}

export default ContactUs



