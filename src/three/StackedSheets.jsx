import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Sheet = ({ position, rotation }) => {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <boxGeometry args={[2, 0.05, 2.8]} />
      <meshStandardMaterial
        color="#1a1a2e"
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
};

const GlowingLens = () => {
  const meshRef = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.z = time * 0.5;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
    }
  });

  return (
    <group position={[0, 1, 0]}>
      {/* Glowing ring */}
      <mesh ref={glowRef}>
        <torusGeometry args={[0.8, 0.05, 16, 64]} />
        <meshStandardMaterial
          color="#b4d4ff"
          emissive="#b4d4ff"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>

      {/* Inner circle */}
      <mesh ref={meshRef} position={[0, 0, 0.01]}>
        <circleGeometry args={[0.7, 64]} />
        <meshStandardMaterial
          color="#ffc4d6"
          emissive="#ffc4d6"
          emissiveIntensity={1.5}
          transparent
          opacity={0.8}
          toneMapped={false}
        />
      </mesh>

      {/* Point light for glow effect */}
      <pointLight position={[0, 0, 0.5]} intensity={2} color="#b4d4ff" distance={5} />
    </group>
  );
};

const StackedSheets = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
  });

  const sheets = [
    { position: [0, 0, 0], rotation: [0, 0, 0] },
    { position: [0.05, 0.15, 0.05], rotation: [0, 0.1, 0] },
    { position: [0.1, 0.3, 0.1], rotation: [0, 0.2, 0] },
    { position: [0.15, 0.45, 0.15], rotation: [0, 0.3, 0] },
    { position: [0.2, 0.6, 0.2], rotation: [0, 0.4, 0] },
  ];

  return (
    <group ref={groupRef}>
      {sheets.map((sheet, index) => (
        <Sheet key={index} {...sheet} />
      ))}
      <GlowingLens />
    </group>
  );
};

export default StackedSheets;
