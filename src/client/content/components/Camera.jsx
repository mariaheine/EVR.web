import "aframe";
import "aframe-animation-component";
import { Entity } from "aframe-react";
import React from "react";

import preload from "../../../../public/data.json";

class Camera extends React.Component {
  state = {
    currentCameraPos: "-3.3 1.8 3",
    currentCameraRot: "0 -83 0",
    cameraTargetPos: "0 0 0",
    cameraTargetRot: "0 0 0"
  };

  componentWillReceiveProps(nextProps) {
    // componentWillReceiveProps() is invoked before a mounted component receives new props. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method.
    var tmpPos = document.querySelector("#camera").getAttribute("position");
    var tmpRot = document.querySelector("#camera").getAttribute("rotation");

    if (nextProps.cameraTarget !== this.props.cameraTarget) {
      // If cameraTarget has changed update state (and currentCameraPos as always)
      this.setState(
        {
          currentCameraPos: tmpPos,
          currentCameraRot: tmpRot
        },
        () => this.cameraTargetHandler()
      );
    } else {
      /* IMPORTANT */
      // on every component rerender update currentCameraPos to prevent camera
      // position reset leading to glitches and flickers
      this.setState({
        currentCameraPos: tmpPos,
        currentCameraRot: tmpRot
      });
    }
  }

  // THINK ABOUT THOSE
  // MAYBE THERE'S TOO MUCH IN componentWillReceiveProps
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.cameraTarget === this.props.cameraTarget) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  componentDidUpdate() {}

  cameraTargetHandler = () => {
    // console.log("camera target changed");
    let tmpTargetPos = "";
    let tmpTargetRot = "";

    if (this.props.cameraTarget == "Home") {
      // hard coded logic for home menu
      // add orbital camera
      tmpTargetPos = "1 1.6 1";
    } else {
      const tmpPoster = document.querySelector(
        `#pstr${this.props.cameraTarget}`
      );
      const distanceFromPoster = 2;
      let posX = tmpPoster.getAttribute("position").x;
      let posZ = tmpPoster.getAttribute("position").z;
      let posY = tmpPoster.getAttribute("position").y; // this one isnt altered

      let rotY = tmpPoster.getAttribute("rotation").y;

      let distX = Math.sin(rotY * (Math.PI / 180)) * distanceFromPoster;
      let distZ = Math.cos(rotY * (Math.PI / 180)) * distanceFromPoster;

      let targetRotY = rotY + 180;
      let targetPosX = posX + distX;
      let targetPosZ = posZ + distZ;

      tmpTargetPos = `${targetPosX} ${posY} ${targetPosZ}`;
      tmpTargetRot = `0 ${rotY} 0`;
    }

    // update state camera target details and trigger animation start
    this.setState(
      { cameraTargetPos: tmpTargetPos, cameraTargetRot: tmpTargetRot },
      () => this.cameraTriggerer()
    );
  };

  cameraTriggerer = () => {
    var el = document.querySelector("#camera");
    el.emit("startMovement");
  };

  // "2 1.6 -4"
  render() {
    return (
      <Entity
        id="camera"
        camera
        position={this.state.currentCameraPos}
        rotation={this.state.currentCameraRot}
        animation__translate={{
          property: "position",
          to: this.state.cameraTargetPos,
          dur: 2000,
          easing: "linear",
          loop: false,
          startEvents: "startMovement"
        }}
        animation__rotate={{
          property: "rotation",
          to: this.state.cameraTargetRot,
          dur: 2000,
          easing: "linear",
          loop: false,
          startEvents: "startMovement"
        }}
      />
    );
  }
}

export default Camera;
