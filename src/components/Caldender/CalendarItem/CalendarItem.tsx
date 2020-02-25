import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { Row, Col, Empty } from "antd";
import * as DoctorActions from "../../../store/actions/doctors";

interface Props {
  doctors: any;
  getDoctor: () => void;
}

interface State {}

class CalendarItem extends Component<Props, State> {
  componentDidMount() {
    this.props.getDoctor();
  }

  render() {
    let { doctors } = this.props;
    let temp: any;
    // console.log(doctors);
    if (!_.isEmpty(doctors)) {
      temp = doctors.filter((item: { id: string }) => item.id === "1")[0].name;
      console.log(temp);
    }

    return (
      <div className="CalenderItem">
        <Row>
          <Col span={3} className="colItem">
            {temp}
          </Col>
          <Col span={3} className="colItem">
            22
          </Col>
          <Col span={3} className="colItem">
            23
          </Col>
          <Col span={3} className="colItem">
            24
          </Col>
          <Col span={3} className="colItem">
            25
          </Col>
          <Col span={3} className="colItem">
            26
          </Col>
          <Col span={3} className="colItem">
            27
          </Col>
          <Col span={3} className="colItem">
            28 Sunday
          </Col>
        </Row>

        <Row>
          <Col span={3} className="colItem">
            User Name
          </Col>
          <Col span={3} className="colItem">
            22
          </Col>
          <Col span={3} className="colItem">
            23
          </Col>
          <Col span={3} className="colItem">
            24
          </Col>
          <Col span={3} className="colItem">
            25
          </Col>
          <Col span={3} className="colItem">
            26
          </Col>
          <Col span={3} className="colItem">
            27
          </Col>
          <Col span={3} className="colItem">
            28 Sunday
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state: { doctorReducer: any }) => {
  return {
    doctors: state.doctorReducer
  };
};

export default connect(mapStateToProps, DoctorActions)(CalendarItem);
