import React, { Component } from "react";
import { Avatar, Menu, Dropdown, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";

import Logo from "../../images/logo.png";
import Call from "../../images/call.png";
import Bell from "../../images/bell.png";
import Search from "../../images/search.png";

class Header extends Component {
  render() {
    let day = moment().format("ll");

    const menu = (
      <Menu theme="dark">
        <Menu.Item></Menu.Item>
        <Menu.Item>
          <Link to="/">Edit profile</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/">Logout</Link>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="header">
        <div className="header__left">
          <img className="header__img" src={Logo} alt="logo" />

          <h1 className="header__title">Calendar</h1>
        </div>

        <div className="header__right">
          <div className="header__button">
            <button className="header__right--search">
              <img src={Search} alt="search" />
            </button>
            <div className="cart">
              <button className="header__right--bell">
                <img src={Call} alt="call" />
              </button>
              <span className="cart__quantity">{2}</span>
            </div>
            <div className="cart">
              <button className="header__right--bell">
                <img src={Bell} alt="bell" />
              </button>
              <span className="cart__quantity">{2}</span>
            </div>
          </div>

          <span className="header__day">{day}</span>
          <span className="header__avatar">
            <Dropdown overlay={menu}>
              <Avatar icon="user" className="cursor-point" />
            </Dropdown>
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
