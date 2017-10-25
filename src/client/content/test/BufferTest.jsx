import { Scene, Entity } from "aframe-react";
import React from "react";

import preload from "../../../../public/data.json";

class BufferTest extends React.Component {
  render() {
    return (
      <div>
        <Scene>
          <Entity id="postersHodler" geometry />
        </Scene>
      </div>
    );
  }
}
export default BufferTest;
