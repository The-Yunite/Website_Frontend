import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const YuniteLogo3D = () => {
  const groupRef = useRef();
  const outerRingRef = useRef();
  const innerRingRef = useRef();
  const centerSphereRef = useRef();
  const particlesRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.3;
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = time * 0.2;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = -time * 0.4;
    }

    if (centerSphereRef.current) {
      centerSphereRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.1;
    }
  });

  const particleCount = 100;
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const radius = 3 + Math.random() * 2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;

    particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    particlePositions[i * 3 + 2] = radius * Math.cos(phi);
  }

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#b4d4ff" distance={10} />

      <group ref={outerRingRef}>
        <mesh castShadow receiveShadow>
          <torusGeometry args={[2.5, 0.15, 16, 64]} />
          <meshStandardMaterial
            color="#b4d4ff"
            emissive="#b4d4ff"
            emissiveIntensity={1.5}
            metalness={0.8}
            roughness={0.2}
            toneMapped={false}
          />
        </mesh>
      </group>

      <group ref={innerRingRef}>
        <mesh castShadow receiveShadow>
          <torusGeometry args={[1.8, 0.12, 16, 64]} />
          <meshStandardMaterial
            color="#ffc4d6"
            emissive="#ffc4d6"
            emissiveIntensity={1.5}
            metalness={0.8}
            roughness={0.2}
            toneMapped={false}
          />
        </mesh>
      </group>

      <mesh castShadow receiveShadow>
        <torusGeometry args={[1.2, 0.08, 16, 64]} />
        <meshStandardMaterial
          color="#d4b4ff"
          emissive="#d4b4ff"
          emissiveIntensity={1.2}
          metalness={0.8}
          roughness={0.2}
          toneMapped={false}
        />
      </mesh>

      <mesh ref={centerSphereRef} castShadow receiveShadow>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#b4fff0"
          emissive="#b4fff0"
          emissiveIntensity={2}
          metalness={0.9}
          roughness={0.1}
          toneMapped={false}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color="#ffd4b4"
          emissive="#ffd4b4"
          emissiveIntensity={1.5}
          metalness={0.7}
          roughness={0.3}
          transparent
          opacity={0.8}
          toneMapped={false}
        />
      </mesh>

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#b4d4ff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      <mesh position={[0, 0, -0.5]}>
        <ringGeometry args={[2.2, 2.8, 64]} />
        <meshStandardMaterial
          color="#b4ffc4"
          emissive="#b4ffc4"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

export default YuniteLogo3D;
