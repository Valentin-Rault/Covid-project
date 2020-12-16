import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Form, Card } from "react-bootstrap";

import { Route } from "react-router-dom";

import { TimeRange } from "./date_range";
import { Countries } from "./Countries";

export const MainCountry = () => {
  return (
    <div>
      <Container>
        <Card className="mb-5">
          <Card.Body>
            <Row>
              <Col md={4}>
                <Form>
                  <h4>Choose a Country</h4>
                  <Form.Group as={Row} controlId="formHorizontalCountry">
                    <Form.Label column md={4}>
                      Country:
                    </Form.Label>
                    <Col>
                      <Form.Control as="select">
                        <option>France</option>
                        <option>Denmark</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalCumulative">
                    <Form.Label column md={4}>
                      Data:
                    </Form.Label>
                    <Col>
                      <Form.Control as="select">
                        <option>Per Day</option>
                        <option>Cumulative</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
              <Col md={4}>
                <Form>
                  <h4>Choose a Date</h4>
                  <TimeRange />
                </Form>
              </Col>
              <Col md={4}>
                <Button variant="primary">Search</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      <Route
        path={`/country/:countryCode`}
        render={(props) => {
          return (
            <Container>
              <Countries death={false} {...props} />
              <Countries death={true} {...props} />
            </Container>
          );
        }}
      />
    </div>
  );
};

{
  /* <Row className="justify-content-md-center">
          <Col md="auto">Choose a country</Col>
        </Row>
        <Form>
          <Row>
            <Col md={4}>
              <Form.Group
                as={Row}
                className="justify-content-md-center"
                controlId="formHorizontalCountry"
              >
                <Form.Label column md="auto">
                  Country:
                </Form.Label>
                <Col md={6}>
                  <Form.Control as="select">
                    <option>France</option>
                    <option>Denmark</option>
                  </Form.Control>
                </Col>
              </Form.Group> */
}
{
  /* </Col> */
}
{
  /* <Col md={6}>
              <Form.Group
                as={Row}
                className="justify-content-md-center"
                controlId="formHorizontalCumulative"
              >
                <Form.Label column md="auto">
                  Data:
                </Form.Label>
                <Col md="auto">
                  <Form.Control as="select">
                    <option>Per Day</option>
                    <option>Cumulative</option>
                  </Form.Control>
                </Col>
              </Form.Group>
            </Col> */
}
{
  /* </Row>
          <Row className="justiy-content-md-center">
            <Col md="auto">Choose the date</Col>
          </Row>
          <Row>
            <TimeRange />
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Button variant="primary">Search</Button>
            </Col>
          </Row>
        </Form>
      </Container>
      */
}
