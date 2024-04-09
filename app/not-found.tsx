"use client"
import { Suspense } from "react";
import ThreeScene from "@/components/ThreeScene";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import ModelThree from "@/components/ModelThree";

export default function NotFound() {
    return (
        <div className="h-screen w-screen">
            <ThreeScene>
                <color attach="background" args={["#161c24"]}/>
                <PerspectiveCamera makeDefault fov={75} position={[-250, 0, 50]}/>
                <ambientLight intensity={1}/>
                <Suspense fallback={null}>
                    <ModelThree/>
                </Suspense>
                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} autoRotate />
                <Stars/>
            </ThreeScene>
        </div>
    );
}