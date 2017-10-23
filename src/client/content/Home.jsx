import "aframe";
import "aframe-animation-component";
import { Entity, Scene } from "aframe-react";
import React from "react";

import Camera from "./components/Camera";
import Navigation from "./components/Navigation";
import Posters from "./components/Posters";

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
const evrinfo = "/public/objects/evrinfo/evrinfo.gltf";

class Home extends React.Component {
  state = {
    cameraTarget: ""
  };

  // componentDidMount() {
  //   document
  //     .getElementById("btn1")
  //     .addEventListener("click", this.setNextCameraTarget);
  // }

  setNextCameraTarget = nextCameraTarget => () => {
    this.setState({
      cameraTarget: nextCameraTarget
    });
    // console.log(`next camera target: ${nextCameraTarget}`);
  };

  render() {
    return (
      <div>
        <Navigation buttonHandler={this.setNextCameraTarget} />

        <Scene shadow={{ type: "basic" }} stats>
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
              type: "ambient",
              intensity: 0.3
                // castShadow: true,
              // shadowMapHeight: 512,
              // shadowMapWidth: 512
            }}
            position={{ x: 2, y: 2, z: 2 }}
          />
            <Entity
                light={{
                    type: "point",
                    intensity: 0.3,
                    castShadow: true,
                    decay: 2.5,
                    shadowMapHeight: 512,
                    shadowMapWidth: 512
                }}
                position={{ x: 0, y: 0, z: 0 }}
            />
            <Entity
                light={{
                    type: "point",
                    intensity: 0.4,
                    decay: 2.5,
                    castShadow: true,
                    shadowMapHeight: 512,
                    shadowMapWidth: 512
                }}
                position={{ x: 2, y: 2, z: 2 }}
            />
            <Entity
                light={{
                    type: "point",
                    intensity: 0.3,
                    decay: 2.5,
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
            <Entity
            gltf-model="url(/public/objects/evrinfo/evrinfo.gltf)"
            />

          <Posters />

          <Camera cameraTarget={this.state.cameraTarget} />
        </Scene>
      </div>
    );
  }
}
export default Home;
