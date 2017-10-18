import "aframe";
import "aframe-animation-component";
import { Entity } from "aframe-react";
import React from "react";

class Camera extends React.Component {
  // cosntructor() {
  //   // super(props);
  //   this.state = { currentCameraPos: "0 0 0" };
  // }
  state = {
    currentCameraPos: "0 0 0"
  };

  render() {
    return (
      <Entity
        camera
        position="0 2 0"
        animation__translat={{
          property: "position",
          to: "2 1.6 -4",
          dur: 2000,
          easing: "linear",
          loop: false
        }}
      />
    );
  }
}

export default Camera;
