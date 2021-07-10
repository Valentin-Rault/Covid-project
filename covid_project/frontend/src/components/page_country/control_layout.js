import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Card } from "react-bootstrap";

import { TimeRange } from "./date_range";
import { FormOptionList } from "./form_option_list";

export const ControlLayout = (props) => {
  let history = useHistory();

  const countryList = fetchAPI("/api/country-list");
  const cumulative = {
    false: "Per Day",
    true: "Cumulative",
  };

  const countryHandleChange = (e) => {
    history.push(`/country/${e.target.value}`);
  };

  return (
    <Container>
      <Card className="mb-5">
        <Card.Body>
          <Row className="d-flex justify-content-around">
            <Col md={4}>
              <Form>
                <h4>Choose a Country</h4>
                <FormOptionList
                  id="forHorizontalCountry"
                  formHandleChange={countryHandleChange}
                  selectedValue={props.match.params.countryCode}
                  obj={countryList}
                  labelSize={4}
                >
                  Country:
                </FormOptionList>

                <FormOptionList
                  id="formHorizontalCumulative"
                  formHandleChange={props.cumulativeHandleChange}
                  obj={cumulative}
                  labelSize={4}
                >
                  Data:
                </FormOptionList>
              </Form>
            </Col>
            <Col md={4}>
              <Form>
                <h4>Choose a Date</h4>
                <TimeRange
                  startDate={props.startDate}
                  endDate={props.endDate}
                  changeStartDate={props.changeStartDate}
                  changeEndDate={props.changeEndDate}
                />
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
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
