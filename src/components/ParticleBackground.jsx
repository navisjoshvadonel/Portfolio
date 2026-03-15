import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const points = useRef();
  const count = 1500;

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock } = state;
    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        points.current.geometry.attributes.position.array[i3 + 1] += Math.sin(clock.elapsedTime + points.current.geometry.attributes.position.array[i3]) * 0.001;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y += 0.001;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#6366f1"
        sizeAttenuation
        transparent
        alphaTest={0.5}
        opacity={0.6}
      />
    </points>
  );
};

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-background">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
      <div className="hero-glow" />
    </div>
  );
};

export default ParticleBackground;
