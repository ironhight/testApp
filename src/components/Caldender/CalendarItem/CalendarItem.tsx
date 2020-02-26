import React, { Component } from "react";
import { connect } from "react-redux";
import { Avatar, Button, Icon, Dropdown, Menu } from "antd";
import _ from "lodash";

import { Row, Col } from "antd";
import * as DoctorActions from "../../../store/actions/doctors";

interface Props {
  doctors: any;
  getDoctor: () => void;
}

interface State {}

class CalendarItem extends Component<Props, State> {
  componentDidMount() {
    // if (!_.isEmpty(this.props.doctors)) {
    this.props.getDoctor();
    // }
  }

  render() {
    let { doctors } = this.props;
    let temp1, temp2, temp3, temp4, temp5, temp6, temp7: any;
    if (!_.isEmpty(doctors)) {
      console.log("TCL: CalendarItem -> render -> doctors", doctors);
      // temp = doctors.find((item: { id: string }) => item.id === "1");
      temp1 = doctors.filter((item: { id: number }) => item.id === 1)[0];
      temp2 = doctors.filter((item: { id: number }) => item.id === 2)[0];
      temp3 = doctors.filter((item: { id: number }) => item.id === 3)[0];
      temp4 = doctors.filter((item: { id: number }) => item.id === 4)[0];
      temp5 = doctors.filter((item: { id: number }) => item.id === 5)[0];
      temp6 = doctors.filter((item: { id: number }) => item.id === 6)[0];
      temp7 = doctors.filter((item: { id: number }) => item.id === 7)[0];
      // temp3 = doctors.filter((item: { id: string }) => item.id === "3")[0].name;
      // temp4 = doctors.filter((item: { id: string }) => item.id === "4")[0].name;
    }

    return (
      <div className="CalenderItem">
        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp1) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp1.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp1.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp1.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem edit">
            {!_.isEmpty(temp1) && (
              <div className="doctor__appts">
                <p>{temp1.appts} appointment</p>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem edit">
            {!_.isEmpty(temp1) && (
              <div className="doctor__appts">
                <p>{temp1.appts} appointment</p>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem appts"></Col>
        </Row>

        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp2) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp2.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp2.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp2.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
        </Row>

        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp3) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp3.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp3.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp3.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem edit">
            {!_.isEmpty(temp3) && (
              <div className="doctor__appts">
                <p>{temp3.appts} appointment</p>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
        </Row>

        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp4) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp4.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp4.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp4.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem edit">
            {!_.isEmpty(temp4) && (
              <div className="doctor__appts">
                <p>{temp4.appts} appointment</p>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
        </Row>

        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp5) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp5.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp5.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp5.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem edit">
            {!_.isEmpty(temp3) && (
              <div className="doctor__appts">
                <p>{temp3.appts} appointment</p>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
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
