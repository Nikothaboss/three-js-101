import { Box } from "@chakra-ui/layout";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import {TextureLoader} from "three/src/loaders/TextureLoader"
import { Suspense } from "react";

import textureColor from "./img/Tiles093_4K_Color.jpg"
import displacement from "./img/Tiles093_4K_Displacement.jpg"
import normal from "./img/Tiles093_4K_NormalDX.jpg"
import normal2 from "./img/Tiles093_4K_NormalGL.jpg"
import roughness from "./img/Tiles093_4K_Roughness.jpg"
import ao from "./img/Tiles093_4K_AmbientOcclusion.jpg"



const Scene = () => {
  const [
    colorMap,
    displacementMap,
    normalMap,
    roughnessMap,
    aoMap,
    metalnessMap
  ] = useLoader(TextureLoader, [
    textureColor,
    displacement,
    normal2,
    roughness,
    ao,
    normal
  ]);
  return (
    <>
    <ambientLight intensity={0.2} />
    <directionalLight />
    <mesh>
      {/* Width and height segments for displacementMap */}
      <sphereGeometry  />
      <meshStandardMaterial
        displacementScale={0}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
        metalnessMap={metalnessMap}
      />
    </mesh>
  </>
  )
}

function App() {
  return (
    <>
      <Box height="100vh" width="100%" className="canvas-container">
      <Canvas >
        <Suspense fallback={"Loading"}>
          <Scene />
          <OrbitControls  autoRotate/>
        </Suspense>
      </Canvas>
      </Box>
    </>
  );
}

export default App;
