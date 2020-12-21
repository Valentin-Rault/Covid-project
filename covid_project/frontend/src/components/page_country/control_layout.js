import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";

import { TimeRange } from "./date_range";

export const ControlLayout = ({
  cumulativeHandleChange,
  countryHandleChange,
  startDate,
  endDate,
  changeStartDate,
  changeEndDate,
}) => {
  const countryList = fetchAPI("/api/country-list");

  return (
    <Container>
      <Card className="mb-5">
        <Card.Body>
          <Row className="d-flex justify-content-around">
            <Col md={4}>
              <Form>
                <h4>Choose a Country</h4>
                <Form.Group as={Row} controlId="formHorizontalCountry">
                  <Form.Label column md={4}>
                    Country:
                  </Form.Label>
                  <Col>
                    <Form.Control as="select" onChange={countryHandleChange}>
                      {Object.entries(countryList).map(([code, country]) => {
                        return (
                          <option key={code} value={code}>
                            {country}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalCumulative">
                  <Form.Label column md={4}>
                    Data:
                  </Form.Label>
                  <Col>
                    <Form.Control as="select" onChange={cumulativeHandleChange}>
                      <option value="false">Per Day</option>
                      <option value="true">Cumulative</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col md={4}>
              <Form>
                <h4>Choose a Date</h4>
                <TimeRange
                  startDate={startDate}
                  endDate={endDate}
                  changeStartDate={changeStartDate}
                  changeEndDate={changeEndDate}
                />
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

const FormSelect = ({ id, children, formHandleChange }) => {
  <Form.Group as={Row} controlId={id}>
    <Form.Label column md={4}>
      {children}
    </Form.Label>
    <Col>
      <Form.Control as="select" onChange={formHandleChange}>
        {createCountriesOption()}
      </Form.Control>
    </Col>
  </Form.Group>;
};

const fetchAPI = (url) => {
  const [response, setResponse] = useState({});
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResponse(data));
  }, [url]);

  return response;
};
