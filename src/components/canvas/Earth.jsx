import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={2}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.2]}   // safer for mobile
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 40,
        near: 0.1,
        far: 100,
        position: [-3, 2.5, 5], // slightly closer & lighter load
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        
        {/* Mobile-friendly lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.7} position={[5, 5, 5]} />

        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
