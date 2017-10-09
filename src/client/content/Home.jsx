import "aframe";
import { Entity, Scene } from "aframe-react";
import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shadowsON: false };
  }
  render() {
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

    return (
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

        <Entity
          id="box1"
          geometry={{ primitive: "box", height: 1, width: 0.5, depth: 3 }}
          material={{ src: rockTexture }}
          position={{ x: 6, y: 1.6, z: 3 }}
        />
        <Entity
          id="box2"
          geometry={{ primitive: "box" }}
          material={{ src: orient1Texture }}
          position={{ x: -2, y: 2, z: 5 }}
        />
        <Entity
          id="box3"
          geometry={{ primitive: "box" }}
          material={{ src: orient2Texture }}
          position={{ x: -5.5, y: 1.6, z: 0 }}
        />
        <Entity
          id="box4"
          geometry={{ primitive: "box" }}
          material={{ src: orient3Texture }}
          position={{ x: 2, y: 1.6, z: 5.5 }}
        />
        <Entity
          id="box5"
          geometry={{ primitive: "box" }}
          material={{ src: orient4Texture }}
          position={{ x: 2, y: 1.6, z: -5.5 }}
        >
          <Entity
            text={{ value: "BOX 5 YO BIJACZ" }}
            position={{ x: 0, y: 0, z: 0.55 }}
          />
        </Entity>

        <Entity camera look-controls wasd-controls position="0 2 0" />
      </Scene>
    );
  }
}
// <Entity
//   geometry={{ primitive: "box" }}
//   material={{ src: rockTexture }}
//   position={{ x: 3, y: 1, z: 3 }}
// />
// <Entity text={{ value: "Hello, WebVR!" }} />
export default Home;
