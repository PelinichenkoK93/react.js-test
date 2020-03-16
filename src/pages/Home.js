import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, CardDeck, Card, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Lorem ipsum dolor sit amet</h2>
          <CardDeck>
            <Card bg="warning">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <Card.Body>
                  <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Card.Text>
                  <Button variant="primary">dolor sit</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3393793/pexels-photo-3393793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Card.Text>
                  <Button variant="primary">sit amet</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}
