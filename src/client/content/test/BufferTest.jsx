import { Scene, Entity } from "aframe-react";
import React from "react";

import preload from "../../../../public/data.json";

const plankTexture = "/public/textures/WoodPlanksBare.jpg";

// mergeto is bugged currently
// <Entity
//   id="plankyBox"
//   geometry={{ primitive: "box", buffer: false, skipCache: true }}
//   material={{ color: "red" }}
//   position="0 0 0"
// />
// <Entity
//   geometry={{
//     primitive: "box",
//     buffer: false,
//     skipCache: true,
//     mergeTo: "#plankyBox"
//   }}
//   material={{ color: "red" }}
//   position="1 2 3"
// />

class BufferTest extends React.Component {
  render() {
    return (
      <div>
        <Scene stats>
          <a-assets>
            <img id="plank-txtr" src={plankTexture} />
          </a-assets>

          <Entity
            geometry={{
              primitive: "box"
            }}
            material={{ src: "#plank-txtr" }}
            position="0 2 -3"
          />
        </Scene>
      </div>
    );
  }
}
export default BufferTest;
