import React, { Component } from "react";
import { DatePicker, Button, Icon, Menu, Dropdown, Select } from "antd";
import Location from "../../images/pin.png";
import userHome from "../../images/userHome.png";
import Gift from "../../images/gift.png";
import moment from "moment";
import Calenderss from "../../components/Caldender/Calendar";
const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";

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

    const { Option } = Select;

    const dropDown = () => {
      return <img src={userHome} alt="userHome" />;
    };

    return (
      <>
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
                <img
                  src={userHome}
                  alt="userHome"
                  style={{ width: "20px", height: "20px", marginRight: "5px" }}
                />
                <span className="home__doctor--user" style={{ opacity: "0.5" }}>
                  All doctor
                </span>
                <Icon type="down" />
              </Button>
            </Dropdown>

            {/* <Select
              showSearch
              style={{ width: 200 }}
              placeholder="All doctor"
              optionFilterProp="children"
              filterOption={(input: any, option: any) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select> */}
          </div>
          <div className="home__byday">
            <Dropdown overlay={menuByday}>
              <Button>
                <img src={Gift} alt="gift" style={{ marginRight: "5px" }} />
                <span
                  className="home__byday--option"
                  style={{ fontSize: "13px" }}
                >
                  View by Day
                </span>
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
        <div className="calenderss">
          <Calenderss />
        </div>
      </>
    );
  }
}

export default HomePage;
