import React, { Component } from "react";

export default class SideMenu extends Component {
  render() {
    return (
      <>
        <nav id="sidemenu">
          <h1>AXES BANK</h1>
          <a>Dashboard</a>
          <a>Customer</a>
          <a>Loan Request</a>
        </nav>
      </>
    );
  }
}
