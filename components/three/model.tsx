import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, Canvas } from "@react-three/fiber";

function GLTFModel() {
  const gltf = useLoader(GLTFLoader, "./blackhole/scene.gltf");
  return <primitive object={gltf.scene} />;
}

export default function Model() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <GLTFModel />
    </Canvas>
  );
}
