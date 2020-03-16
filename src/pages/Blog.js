import React, {Component} from 'react';
import {Media, Container, Col, Row, Card, ListGroup} from 'react-bootstrap';

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                            width={150}
                            height={350}
                            className="mr-3"
                            src="https://i.pinimg.com/564x/fc/98/99/fc9899a6b5af734106c5b538f01d4af0.jpg"
                            height="300px"
                            width="200px"
                            />
                            <Media.Body>
                                <h5>Lorem ipsum dolor sit amet</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                            width={150}
                            height={350}
                            className="mr-3"
                            src="https://i.pinimg.com/564x/0b/1f/e5/0b1fe53d9a0c162d52745a6ebefe1df8.jpg"
                            height="300px"
                            width="200px"
                            />
                            <Media.Body>
                                <h5>Consectetur adipiscing elit</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Sunt in culpa qui</ListGroup.Item>
                                <ListGroup.Item>Occaecat cupidatat</ListGroup.Item>
                                <ListGroup.Item>Mollit anim id</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}