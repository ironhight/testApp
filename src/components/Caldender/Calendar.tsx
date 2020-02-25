import React, { Component } from "react";
import { Row, Col } from "antd";
import CalendarItem from "./CalendarItem/CalendarItem";

class Calendarss extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={3}></Col>
          <Col span={3}>22 MONDAY</Col>
          <Col span={3}>23 TUESDAY</Col>
          <Col span={3}>24 WEDNESDAY</Col>
          <Col span={3}>25 THUSDAY</Col>
          <Col span={3}>26 FRIDAY</Col>
          <Col span={3}>27 SATURDAY</Col>
          <Col span={3}>28 SUNDAY</Col>
        </Row>
        <CalendarItem />
      </div>
    );
  }
}

export default Calendarss;
