import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
    );
  }
}

export default Navbar;
