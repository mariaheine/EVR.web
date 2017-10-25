import "aframe";
import "aframe-animation-component";
import { Entity, Scene } from "aframe-react";
import React from "react";

import preload from "../../../public/data.json";
import Camera from "./components/Camera";
import Navigation from "./components/Navigation";
import Posters from "./components/Posters";
import Content from "./components/Content";

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
    cameraTarget: ""
  };

  setNextCameraTarget = nextCameraTarget => () => {
    this.setState({
      cameraTarget: nextCameraTarget
    });
    // console.log(`next camera target: ${nextCameraTarget}`);
  };

  render() {
    var mainDiv = {
      zIndex: 100,
      position: "relative"
    };

    var fuckingDiv = {
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 1,
      overflow: "hidden"
    };

    var fuckingDiv2 = {
      background: "#F8F8F8",
      color: "#333",
      fontSize: "15px"
    };

    return (
      <div className="wrapper">
        <Content />

        <div className="aframe-wrapper">
          <Navigation buttonHandler={this.setNextCameraTarget} />
          <Scene
            className="okno-aframe"
            shadow={{ type: "basic" }}
            embedded
            stats
          >
            <a-assets>
              <a-asset-item id="samurai-obj" src={samuraiObj} />
              <img id="samurai-txtr" src={samuraiTexture} />
            </a-assets>
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
              id="entSamurai"
              obj-model={{ obj: "#samurai-obj" }}
              material={{ src: "#samurai-txtr" }}
              position="1 0 1"
              shadow={{ cast: true }}
              geometry={{ buffer: false, skipCache: true }}
            />

            <Posters />

            <Camera cameraTarget={this.state.cameraTarget} />
          </Scene>
        </div>
      </div>
    );
  }
}

export default Home;
