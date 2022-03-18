import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import React, { Suspense } from "react";
import Ship from "./Ship.js";
import Box from "@mui/material/Box";

class Graphic extends React.Component {
  render() {
    return (
      <Box>
        <Canvas
          style={{ background: "#ffffff", height: "100vh", width: "100%" }}
        >
          <OrbitControls />
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <spotLight
              intensity={0.5}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <Ship />
          </Suspense>
        </Canvas>
      </Box>
    );
  }
}

export default Graphic;
