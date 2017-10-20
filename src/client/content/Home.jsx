import "aframe";
import "aframe-animation-component";
import { Entity, Scene } from "aframe-react";
import React from "react";

import preload from "../../../public/data.json";
import Camera from "./components/Camera";
import Navigation from "./components/Navigation";

const samuraiObj = "/public/objects/OrientSamuraj/OrientSamuraj.obj";
const samuraiTexture = "/public/objects/OrientSamuraj/OrientSamuraj.jpg";

/* floor texture */
const plankTexture = "/public/textures/WoodPlanksBare.jpg";

/* box textures */
const rockTexture = "/public/textures/RockBlocky.jpg";
const orient1Texture = "/public/textures/OrientalPanels1.jpg";
const orient2Texture = "/public/textures/OrientalPanels2.jpg";
const orient3Texture = "/public/textures/OrientalPanels3.jpg";
const orient4Texture = "/public/textures/OrientalPanels4.jpg";

class Home extends React.Component {
  state = {
    currentCameraTarget: "0 0 0",
    cameraTarget: ""
  };

  // componentDidMount() {
  //   document
  //     .getElementById("btn1")
  //     .addEventListener("click", this.setNextCameraTarget);
  // }

  setNextCameraTarget = nextCameraTarget => () => {
    // var el = document.querySelector("#camera");
    this.setState(
      {
        currentCameraTarget: "-10 0 0",
        cameraTarget: nextCameraTarget
      }
      // el.emit("startMovement")
    );
    console.log(`next camera target: ${nextCameraTarget}`);
  };

  render() {
    const posters = preload.posters.map(poster =>
      <Entity
        key={`${poster.id}`}
        id={`pstr${poster.title}`}
        geometry={{ primitive: "plane" }}
        material={{ src: `/public/textures/${poster.image}` }}
        position={poster.position}
        rotation={poster.rotation}
      />
    );
    // <div>
    //   <button id="btn1" onClick={this.setNextCameraTarget("asd")}>
    //     BOX 111
    //   </button>
    //   <button id="btn1224214">yoooooooooooooo</button>
    // </div>
    return (
      <div>
        <Navigation buttonHandler={this.setNextCameraTarget} />

        <Scene shadow={{ type: "basic" }} stats>
          {posters}

          <Entity
            geometry={{
              primitive: "plane",
              height: "10",
              width: "10"
            }}
            material={{ src: plankTexture, repeat: "4 13", roughness: "1" }}
            position={{ x: 0, y: 0, z: 0 }}
            rotation="-90 0 0"
            shadow={{ receive: this.state.shadowsON }}
          />
          <Entity
            light={{
              type: "point",
              castShadow: true,
              shadowMapHeight: 512,
              shadowMapWidth: 512
            }}
            position={{ x: 2, y: 2, z: 2 }}
          />
          <Entity
            obj-model={{ obj: samuraiObj }}
            material={{ src: samuraiTexture }}
            scale="1 1 1"
            rotation="0 0 0"
            position="0 0 0"
            shadow={{ cast: true }}
          />

          <Camera cameraTarget={this.state.cameraTarget} />
        </Scene>
      </div>
    );
  }
}

// <Entity
//   id="screen3"
//   geometry={{ primitive: "plane" }}
//   rotation="0 90 0"
//   material={{ src: orient2Texture }}
//   position={{ x: -5.5, y: 1.6, z: 0 }}
// />
// <Entity
//   id="screen4"
//   geometry={{ primitive: "plane" }}
//   rotation="0 180 0"
//   material={{ src: orient3Texture }}
//   position={{ x: 2, y: 1.6, z: 5.5 }}
// />
// <Entity
//   id="screen1"
//   geometry={{ primitive: "plane" }}
//   rotation="0 -90 0"
//   material={{ src: rockTexture }}
//   position={{ x: 6, y: 1.6, z: 3 }}
// />
// <Entity
//   id="screen2"
//   geometry={{ primitive: "plane" }}
//   rotation="0 180 0"
//   material={{ src: orient1Texture }}
//   position={{ x: -2, y: 2, z: 5 }}
// >
//   <Entity
//     text={{ value: "BOX 5 YO BIJACZ" }}
//     position={{ x: 0, y: 0, z: 0.55 }}
//   />
// </Entity>
// <Entity
//   id="camera"
//   camera
//   position={this.state.currentCameraPos}
//   animation__translat={{
//     property: "position",
//     to: "2 1.6 -4",
//     dur: 4000,
//     easing: "linear",
//     loop: false
//   }}
// />
// <Entity
//   geometry={{ primitive: "box" }}
//   material={{ src: rockTexture }}
//   position={{ x: 3, y: 1, z: 3 }}
// />
// <Entity text={{ value: "Hello, WebVR!" }} />
export default Home;
