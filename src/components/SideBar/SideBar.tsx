import React, { Component } from "react";
import Home from "../../images/home-run.png";
import Calendar from "../../images/calendar.png";
import Cart from "../../images/supermarket.png";
import User from "../../images/user.png";
import Medicince from "../../images/doctor.png";
import Tax from "../../images/tax.png";
import Chart from "../../images/graphic.png";
import Bill from "../../images/bill.png";
import Truck from "../../images/truck.png";
import Agreement from "../../images/agreement.png";
import Price from "../../images/price.png";
import Woman from "../../images/price.png";
import PieChart from "../../images/pie-chart.png";

import Setting from "../../images/settings.png";

class SiderBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__images">
          <span className="images--item active">
            <img src={Home} alt="home" />
          </span>
          <span className="images--item">
            <img src={Calendar} alt="calender" />
          </span>
          <span className="images--item">
            <img src={Cart} alt="cart" />
          </span>
          <span className="images--item">
            <img src={User} alt="user" />
          </span>
          <span className="images--item">
            <img src={Medicince} alt="medicince" />
          </span>
          <span className="images--item">
            <img src={Tax} alt="tax" />
          </span>
          <span className="images--item">
            <img src={Chart} alt="chart" />
          </span>
          <span className="images--item">
            <img src={Bill} alt="bill" />
          </span>
          <span className="images--item">
            <img src={Truck} alt="truck" />
          </span>
          <span className="images--item">
            <img src={Agreement} alt="agreement" />
          </span>
          {/* <span className="images--item">
            <img src={Price} alt="price" />
          </span> */}
          <span className="images--item">
            <img src={Woman} alt="woman" />
          </span>
        </div>
        <div className="images__item--setting">
          <img src={Setting} alt="setting" />
        </div>
      </div>
    );
  }
}

export default SiderBar;
