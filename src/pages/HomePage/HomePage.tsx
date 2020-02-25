import React, { Component } from "react";
import { DatePicker, Button, Radio, Icon, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import Location from "../../images/pin.png";
import userHome from "../../images/userHome.png";
import Gift from "../../images/gift.png";
import moment from "moment";

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";
const monthFormat = "YYYY/MM";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

class HomePage extends Component {
  render() {
    const menuLocation = (
      <Menu>
        <Menu.Item key="1">
          <Icon type="user" />
          1st menu item
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          2nd menu item
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />
          3rd item
        </Menu.Item>
      </Menu>
    );

    const menuDoctor = (
      <Menu>
        <Menu.Item key="1">
          <Icon type="user" />
          1st menu item
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          2nd menu item
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />
          3rd item
        </Menu.Item>
      </Menu>
    );

    const menuByday = (
      <Menu>
        <Menu.Item key="1">
          <Icon type="user" />
          1st menu item
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          2nd menu item
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />
          3rd item
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="HomePage">
        <div className="home__picker">
          <Button icon="arrow-left" className="arrow-test" />
          <span className="home__picker--pickday">
            <RangePicker
              defaultValue={[
                moment("2015/01/01", dateFormat),
                moment("2015/01/01", dateFormat)
              ]}
              format={dateFormat}
            />
          </span>

          <Button icon="arrow-right" className="arrow-test" />
        </div>

        <div className="home__location">
          <Dropdown overlay={menuLocation}>
            <Button>
              <img src={Location} alt="location" />
              Branch Dang Luu <Icon type="down" />
            </Button>
          </Dropdown>
        </div>

        <div className="home__doctor">
          <Dropdown overlay={menuDoctor}>
            <Button>
              <img src={userHome} alt="userHome" />
              <span className="home__doctor--user">All doctor</span>
              <Icon type="down" />
            </Button>
          </Dropdown>
        </div>

        <div className="home__byday">
          <Dropdown overlay={menuByday}>
            <Button>
              <img src={Gift} alt="gift" />
              <span className="home__byday--option">View by Day</span>
              <Icon type="down" />
            </Button>
          </Dropdown>
        </div>

        <div className="home__icon">
          <Icon type="eye" />
        </div>

        <div className="home__display">
          <span className="display__1">
            <Button>
              <Icon type="plus-square" />
            </Button>
          </span>
          <span className="display__2">
            <Button>
              <Icon type="minus-square" />
            </Button>
          </span>
        </div>
      </div>
    );
  }
}

export default HomePage;
