import React from "react";
// import styled from "styled-components";

import preload from "../../../../public/data.json";

// const Menu = styled.div`
//   float: right;
// `;
//
// const Button = styled.button`
//   background-color: #555555;
//   border: 5px;
//   color: white;
//   padding: 7px 20px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   z-index: 110;
// `;

class Navigation extends React.Component {
  state = {};

  render() {
    var divNav = {
      zIndex: 100
    };

    const homeButton = (
      <button id="home_btn" onClick={this.props.buttonHandler("Home")}>
        Home
      </button>
    );

    const buttons = preload.posters.map(button =>
      <button
        key={`${button.id}`}
        onClick={this.props.buttonHandler(button.title)}
      >
        {button.title}
      </button>
    );

    return (
      <div>
        {homeButton}
        {buttons}
      </div>
    );
  }
}

export default Navigation;
