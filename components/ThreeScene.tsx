import { Canvas } from "@react-three/fiber";


export default function ThreeScene({ children }:any) {
    return (
        <Canvas>
            {children}
        </Canvas>
    );
}