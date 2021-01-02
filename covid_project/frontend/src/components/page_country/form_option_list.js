import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const FormOptionList = ({
  id,
  formHandleChange,
  obj,
  selectedValue,
  labelSize,
  children,
}) => {
  return (
    <Form.Group as={Row} controlId={id}>
      <Form.Label column md={labelSize}>
        {children}
      </Form.Label>
      <Col>
        <Form.Control
          as="select"
          value={selectedValue}
          onChange={formHandleChange}
        >
          {optionsList(obj)}
        </Form.Control>
      </Col>
    </Form.Group>
  );
};

function optionsList(obj) {
  return Object.entries(obj).map(([value, display]) => (
    <>
      <option key={value} value={value}>
        {display}
      </option>
    </>
  ));
}
