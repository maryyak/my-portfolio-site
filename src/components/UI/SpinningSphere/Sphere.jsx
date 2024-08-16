import {useEffect, useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import sphereModel from '../../../assets/models/sphere/sphere.gltf';
import {useFrame} from "@react-three/fiber";

const spinSphere = (modelRef, spinX, spinY) => {
    if (modelRef.current) {
        modelRef.current.rotation.x += spinX;
        modelRef.current.rotation.y += spinY;
    }
}

export function Sphere(props) {
    const { nodes, materials } = useGLTF(`${sphereModel}`)
    const modelRef = useRef();

    useFrame(() => spinSphere(modelRef, 0.01, 0.01));

    useEffect(() => {
        const handleScroll = () => spinSphere(modelRef, 0.2, 0.2);

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <mesh ref={modelRef}>
            <group {...props} dispose={null}>
                <group scale={0.025}>
                    <mesh geometry={nodes['Hedra001_Material_#0_0'].geometry} material={materials.Material_0}
                          position={[-0.618, 0, 3.478]} rotation={[-Math.PI / 2, 0, 0]} scale={0.641}></mesh>
                </group>
            </group>
        </mesh>
    )
}

useGLTF.preload(`${sphereModel}`)