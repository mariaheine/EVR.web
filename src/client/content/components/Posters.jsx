import "aframe-html-shader";
import { Entity } from "aframe-react";
import React from "react";

import preload from "../../../../public/data.json";

class Posters extends React.Component {
  render() {
    const posters = preload.posters.map(poster =>
      <Entity
        key={`${poster.id}`}
        id={`pstr${poster.title}`}
        geometry={{ primitive: "plane", height: 2, width: 1 }}
        material={{ shader: "html", target: "#contact" }}
        position={poster.position}
        rotation={poster.rotation}
      />
    );
    return (
      <Entity id="postersHodler">
        {posters}
      </Entity>
    );
  }
}
// {{ src: `/public/textures/${poster.image}` }}

export default Posters;
