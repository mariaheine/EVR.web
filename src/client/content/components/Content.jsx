import React from "react";

const orient2Texture = "/public/textures/OrientalPanels2.jpg";

class Content extends React.Component {
  render() {
    var outerDiv = {
      width: "100%",
      height: "100%",
      position: "fixed",
      left: 0,
      top: 0,
      zIndex: -1,
      overflow: "hidden"
    };

    var contactDiv = {
      padding: "10px",
      height: 1024,
      width: 512,
      background: "#F8F8F8",
      color: "black",
      fontSize: "45px"
    };

    return (
      <div className="content">
        <div id="contact" style={contactDiv}>
          <p>Lorem ipsum dolor sit amet, </p>
          <h1>consectetur adipiscing</h1> elit. Nunc mattis ante tempus, maximus
          metus vitae, fermentum nibh.🐴
        </div>
      </div>
    );
  }
}
// <div style={innerDiv}>
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis
//   ante tempus, maximus metus vitae, fermentum nibh. Cras aliquet dui
//   turpis, at tempus nisi suscipit efficitur. Praesent turpis libero,
//   elementum at enim id, cursus eleifend nisi. Donec tellus eros, feugiat
//   sit amet lectus eu, congue venenatis magna. Vivamus mollis rutrum
//   iaculis. Suspendisse lacinia tellus et odio lacinia luctus.
//   Suspendisse vel gravida lorem, at ultrices augue. Donec lacinia quis
//   orci ut dictum. Curabitur ut placerat diam. Sed eu sapien metus. Nulla
//   auctor, est dictum congue condimentum, purus lorem tempus ipsum, sit
//   amet pellentesque elit tellus et ipsum. Donec nibh neque, cursus vel
//   sem sed, ullamcorper sodales erat.
// </div>

export default Content;
