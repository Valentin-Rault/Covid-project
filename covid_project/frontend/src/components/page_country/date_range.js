import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, Row } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";

export function TimeRange() {
  const [startDate, setStartDate] = useState(new Date("2020/01/03"));
  const [endDate, setEndDate] = useState(new Date("2020/12/12"));

  return (
    <div>
      <Row className="mb-3">
        <Col md={5} className="px-3 py-2">
          Starting Date:
        </Col>
        <Col className="px-3 py-2">
          <DatePicker
            selected={startDate}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setStartDate(date)}
            popperClassName="bottome-class"
            popperPlacement="bottom-end"
            startDate={startDate}
            endDate={endDate}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={5} className="px-3 py-2">
          Ending Date:
        </Col>
        <Col className="px-3 py-2">
          <DatePicker
            selected={endDate}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setEndDate(date)}
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </Col>
      </Row>
    </div>
  );
}
