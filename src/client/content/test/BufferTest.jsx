import { Scene, Entity } from "aframe-react";
import React from "react";
import "aframe";
import "aframe-environment-component";

import preload from "../../../../public/data.json";

const plankTexture = "/public/textures/WoodPlanksBare.jpg";
const unityExport = "/public/scene/scene.json";
const unityExport2 = "/public/scene2/scene.json";
const unityExport3 = "/public/scene3/scene.json";
const unityExport4 = "/public/scene4/scene.json";
const unityExport5 = "/public/BakeFixI/scene.json";
const viking = "/public/VikingHouse/scene.json";

const samuraiObj = "/public/objects/OrientSamuraj/OrientSamuraj.obj";
const samuraiTexture = "/public/objects/OrientSamuraj/OrientSamuraj.jpg";

class BufferTest extends React.Component {
  componentDidMount() {
    let targetEntity = document.querySelector("#sceneModel");
    let mesh;
    let loader = new THREE.ObjectLoader();
    loader.load(unityExport5, function(object) {
      mesh = object;
      console.log(mesh);
      console.log(targetEntity);
      targetEntity.setObject3D("mesh", mesh);
      // targetEntity.emit("model-loaded", { format: "json", model: model });
    });
  }

  render() {
    return (
      <div>
        <Scene stats light="defaultLightsEnabled: false">
          <a-assets>
            <img id="plank-txtr" src={plankTexture} />
            <a-asset-item id="samurai-obj" src={samuraiObj} />
            <img id="samurai-txtr" src={samuraiTexture} />
          </a-assets>

          <Entity
            environment={{ preset: "contact", lighting: "none", fog: 0.85 }}
          />

          <Entity
            id="entSamurai"
            obj-model={{ obj: "#samurai-obj" }}
            material={{ src: "#samurai-txtr" }}
            position="1 0 1"
            shadow={{ cast: true }}
            geometry={{ buffer: true, skipCache: false }}
          />

          <Entity id="sceneModel" />
        </Scene>
      </div>
    );
  }
}
export default BufferTest;
