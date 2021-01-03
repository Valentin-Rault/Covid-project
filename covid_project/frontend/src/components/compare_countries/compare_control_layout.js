import React, { useState, useEffect } from "react";

import { Container, Row, Col, Form, Card } from "react-bootstrap";

import { FormOptionList } from "../page_country/form_option_list";
import { TimeRange } from "../page_country/date_range";

export const CompareControlLayout = ({
  cumulativeHandleChange,
  firstCountryChange,
  secondCountryChange,
  firstCountryCode,
  secondCountryCode,
  startDate,
  endDate,
  changeStartDate,
  changeEndDate,
}) => {
  const countryList = fetchAPI("/api/country-list");
  const cumulative = {
    false: "Per Day",
    true: "Cumulative",
  };

  return (
    <Container>
      <Card className="mb-5">
        <Card.Body>
          <Row className="d-flex justify-content-around">
            <Col md={5}>
              <Form>
                <h4>Choose Countries</h4>
                <FormOptionList
                  id="formHorizontalCountry"
                  formHandleChange={firstCountryChange}
                  obj={countryList}
                  selectedValue={firstCountryCode}
                  labelSize={5}
                >
                  First country:
                </FormOptionList>
                <FormOptionList
                  id="formHorizontalCountry"
                  formHandleChange={secondCountryChange}
                  obj={countryList}
                  selectedValue={secondCountryCode}
                  labelSize={5}
                >
                  Second Country:
                </FormOptionList>

                <FormOptionList
                  id="formHorizontalCumulative"
                  formHandleChange={cumulativeHandleChange}
                  obj={cumulative}
                  labelSize={5}
                >
                  Data:
                </FormOptionList>
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

const fetchAPI = (url) => {
  const [response, setResponse] = useState({});
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResponse(data));
  }, [url]);

  return response;
};
