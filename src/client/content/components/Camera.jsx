import "aframe";
import "aframe-animation-component";
import { Entity } from "aframe-react";
import React from "react";

class Camera extends React.Component {
  state = {
    currentCameraPos: "-3.3 1.8 3",
    currentCameraRot: "0 -83 0",
    targetCameraPos: "",
    targetCameraRot: ""
  };

  componentWillReceiveProps() {
    var tmpPos = document.querySelector("#camera").getAttribute("position");
    // console.log(tmpPos);
    this.setState({ currentCameraPos: tmpPos });
  }

  render() {
    return (
      <Entity
        id="camera"
        camera
        position={this.state.currentCameraPos}
        rotation={this.state.currentCameraRot}
        animation__translate={{
          property: "position",
          to: "2 1.6 -4",
          dur: 2000,
          easing: "linear",
          loop: false,
          startEvents: "animateyo"
        }}
      />
    );
  }
}

export default Camera;
