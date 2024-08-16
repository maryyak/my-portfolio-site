import React, { useEffect, useRef } from 'react';
import { useGLTF, useFrame } from '@react-three/drei';
import sphereModel from '../../../assets/models/sphere/sphere.gltf';

export function Sphere(props) {
    const { nodes, materials } = useGLTF(sphereModel);
    const modelRef = useRef();
    const rotationAxisRef = useRef([1, 0, 0]);
    const rotationAngleRef = useRef(0);
    const rotationSpeedRef = useRef(0);
    const frameRequestIdRef = useRef(null);

    const rotateModel = () => {
        if (!modelRef.current) return;

        modelRef.current.rotation.x += rotationSpeedRef.current * rotationAxisRef.current[0];
        modelRef.current.rotation.y += rotationSpeedRef.current * rotationAxisRef.current[1];
    };

    const updateRotation = () => {
        rotationAngleRef.current += rotationSpeedRef.current;
        rotateModel();
        frameRequestIdRef.current = requestAnimationFrame(updateRotation);
    };

    useEffect(() => {
        const onMouseMove = (e) => {
            const deltaX = e.clientX - window.innerWidth / 2;
            const deltaY = e.clientY - window.innerHeight / 2;
            const a = Math.atan2(deltaX, deltaY) - Math.PI / 2;
            const axis = [Math.sin(a), Math.cos(a), 0];
            const delta = Math.sqrt(deltaX ** 2 + deltaY ** 2);
            const speed = delta / Math.max(window.innerHeight, window.innerWidth) / 10;

            rotationAxisRef.current = axis;
            rotationSpeedRef.current = speed;
        };

        document.addEventListener('mousemove', onMouseMove);
        updateRotation();

        return () => {
            cancelAnimationFrame(frameRequestIdRef.current);
            document.removeEventListener('mousemove', onMouseMove);
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
    );
}

useGLTF.preload(sphereModel);
