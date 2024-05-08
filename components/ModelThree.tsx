import React, { useMemo } from 'react';
import { useLoader, } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/Addons.js';

export default function ModelThree() {


        const fbx = useLoader(FBXLoader, 'Error_pageNotFound.fbx');
        
    
    return (
            <primitive object={fbx} />
    );
}