import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const FormOptionList = ({ id, formHandleChange, obj, children }) => {
  return (
    <Form.Group as={Row} controlId={id}>
      <Form.Label column md={4}>
        {children}
      </Form.Label>
      <Col>
        <Form.Control as="select" onChange={formHandleChange}>
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
