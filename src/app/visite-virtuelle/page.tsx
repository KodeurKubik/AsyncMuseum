"use client";

import * as THREE from "three";
import { useCallback, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Text,
  Environment,
} from "@react-three/drei";
import { useSearchParams, useRouter } from "next/navigation";
import { easing } from "maath";
import allimages from "@/app/images";

const GOLDENRATIO = 1.61803398875;

export default function VisiteVirtuelle() {
  const [images] = useState(() =>
    [...allimages]
      .sort(() => 0.5 - Math.random())
      .slice(0, 25)
      .map((img, i) => ({
        ...img,
        position: [1.5 * i, 0, 1.5],
        index: i + 1,
      })),
  );

  return (
    <main className="flex-1 pt-16 sm:pt-24 flex flex-col my-4 h-[calc(100vh-2rem)]">
      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
        <color attach="background" args={["#191920"]} />
        <fog attach="fog" args={["#191920", 0, 15]} />
        <group position={[0, -0.5, 0]}>
          <Frames images={images} />
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={80}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#050505"
              metalness={0.5}
            />
          </mesh>
        </group>
        <Environment preset="city" />
      </Canvas>
    </main>
  );
}

function Frames({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}: {
  images: {
    position: number[];
    rotation: number[];
    url: string;
    name: string;
    index: number;
  }[];
  q?: THREE.Quaternion;
  p?: THREE.Vector3;
}) {
  const ref = useRef<THREE.Group>(null);
  const clicked = useRef<THREE.Object3D | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const imageId = searchParams.get("id");

  const navigateTo = useCallback(
    (id?: string) => {
      if (id) {
        router.push(`/visite-virtuelle?id=${id}`);
      } else {
        router.push("/visite-virtuelle");
      }
    },
    [router],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (imageId) {
        const currentId = parseInt(imageId);
        if (!isNaN(currentId)) {
          // Move to previous image
          if (e.key === "ArrowLeft") {
            const prevId = Math.max(1, currentId - 1);
            if (prevId !== currentId) {
              navigateTo(prevId.toString());
            }
          }
          // Move to next image
          else if (e.key === "ArrowRight") {
            const nextId = Math.min(images.length, currentId + 1);
            if (nextId !== currentId) {
              navigateTo(nextId.toString());
            }
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageId, images.length, navigateTo]);

  useEffect(() => {
    clicked.current = imageId
      ? ref.current?.getObjectByName(imageId) || null
      : null;
    if (clicked.current) {
      clicked.current.parent?.updateWorldMatrix(true, true);
      clicked.current.parent?.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
      clicked.current.parent?.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  });

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  return (
    <group
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        if (clicked.current === e.object) {
          navigateTo();
        } else {
          navigateTo(e.object.name);
        }
      }}
      onPointerMissed={() => navigateTo()}
    >
      {images.map((props) => (
        <Frame key={props.name} img={props} {...props} activeId={imageId} />
      ))}
    </group>
  );
}

function Frame({
  img,
  activeId,
  ...props
}: {
  img: {
    position: number[];
    rotation: number[];
    url: string;
    name: string;
    index: number;
  };
  activeId: string | null;
}) {
  const image = useRef<THREE.Mesh>(null);
  const frame = useRef<THREE.Mesh>(null);

  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const name = String(img.index);
  const isActive = activeId === name;

  useCursor(hovered);

  useFrame((state, dt) => {
    if (!image.current || !frame.current) return;

    // Add type assertions to fix TypeScript errors
    (image.current.material as any).zoom =
      2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    easing.damp3(
      image.current.scale,
      [
        0.85 * (!isActive && hovered ? 0.85 : 1),
        0.9 * (!isActive && hovered ? 0.905 : 1),
        1,
      ],
      0.1,
      dt,
    );
    easing.dampC(
      (frame.current.material as any).color,
      hovered ? "orange" : "white",
      0.1,
      dt,
    );
  });
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.7]}
          url={img.url}
        />
      </mesh>
      <Text
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        position={[0.55, GOLDENRATIO, 0]}
        fontSize={0.025}
      >
        {img.name}
      </Text>
    </group>
  );
}
