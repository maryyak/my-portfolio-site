import {useEffect, useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import sphereModel from '../../../assets/models/sphere/sphere.gltf';
import {useFrame} from "@react-three/fiber";

export function Sphere(props) {
    const { nodes, materials } = useGLTF(`${sphereModel}`)
    const modelRef = useRef();

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.x += 0.01;
            modelRef.current.rotation.y += 0.01;
        }
    });

    useEffect(() => {
        const handleScroll = () => {
            if (modelRef.current) {
                modelRef.current.rotation.x += 0.1;
                modelRef.current.rotation.y += 0.1;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
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