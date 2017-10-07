import React from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lol: true };
  }
  render() {
    // yeye, it won't stay like that
    // const samuraiObj = "/public/objects/OrientSamuraj/OrientSamuraj.obj";
    // const samuraiTexture = "/public/objects/OrientSamuraj/OrientSamuraj.jpg";
    // console.log("i chuj");

    return (
      <div>
        <Scene>
          <Entity
            geometry={{ primitive: "box" }}
            material={{ color: "red" }}
            position={{ x: 0, y: 0, z: -5 }}
          />
          <Entity light={{ type: "point" }} />
          <Entity text={{ value: "Hello, WebVR!" }} />
        </Scene>
      </div>
    );
  }
}
// <a-assets>
//   <a-asset item id="samurai-obj" src={{ samuraiObj }} />
//   <a-asset item id="samurai-texture" src={{ samuraiTexture }} />
// </a-assets>
//
// <Entity
//   obj-model="obj: #samurai-obj"
//   material="src: #samurai_texture"
//   scale="1 1 1"
//   rotation="0 0 0"
//   position="0 0 0"
// />
export default Home;
