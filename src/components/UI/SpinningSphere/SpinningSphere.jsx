import {Canvas} from '@react-three/fiber';
import {EffectComposer, Bloom, ToneMapping} from '@react-three/postprocessing';
import {OrbitControls} from '@react-three/drei';
import {Sphere} from "./Sphere";
import styles from './SpinningSphere.module.css'

const SpinningSphere = () => {
    return (
        <div className={styles.spinningSphere}>
            <Canvas shadows camera={{fov: 75, position: [0, 0, 3]}}>
                {/* Post-processing effects */}
                <EffectComposer>
                    <Bloom intensity={0.3} luminanceThreshold={0.4} luminanceSmoothing={2}/>
                    <ToneMapping exposure={1}/>
                </EffectComposer>

                {/* Lightning */}
                <ambientLight intensity={0.8}/>
                <directionalLight position={[8, 3, 0]} intensity={7}/>
                <directionalLight position={[1, -2, 3]} intensity={7}/>
                <directionalLight position={[1, 1, 3]} intensity={7}/>
                <directionalLight position={[-2, -1, -2]} intensity={7}/>
                <pointLight intensity={6}/>

                {/* 3D model */}
                <Sphere/>

                <OrbitControls enableZoom={false}/>
            </Canvas>
        </div>
    );
};

export default SpinningSphere;