import React, { useEffect, useRef } from 'react';
import styles from './TagsCloud.module.css';

class FibonacciSphere {
    constructor(N) {
        this.points = [];
        const goldenAngle = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < N; i++) {
            const y = 1 - (i / (N - 1)) * 2;
            const radius = Math.sqrt(1 - y ** 2);
            const a = goldenAngle * i;
            const x = Math.cos(a) * radius;
            const z = Math.sin(a) * radius;

            this.points.push([x, y, z]);
        }
    }
}

const TagsCloud = ({ tags }) => {
    const cloudRef = useRef(null);
    const sizeRef = useRef(0);
    const rotationAxisRef = useRef([1, 0, 0]);
    const rotationAngleRef = useRef(0);
    const rotationSpeedRef = useRef(0);
    const frameRequestIdRef = useRef(null);

    const updatePositions = (sphere, tagsElements) => {
        const sin = Math.sin(rotationAngleRef.current);
        const cos = Math.cos(rotationAngleRef.current);
        const [ux, uy, uz] = rotationAxisRef.current;
        const rotationMatrix = [
            [cos + ux ** 2 * (1 - cos), ux * uy * (1 - cos) - uz * sin, ux * uz * (1 - cos) + uy * sin],
            [uy * ux * (1 - cos) + uz * sin, cos + uy ** 2 * (1 - cos), uy * uz * (1 - cos) - ux * sin],
            [uz * ux * (1 - cos) - uy * sin, uz * uy * (1 - cos) + ux * sin, cos + uz ** 2 * (1 - cos)],
        ];

        tagsElements.forEach((tag, i) => {
            const [x, y, z] = sphere.points[i];
            const transformedX = rotationMatrix[0][0] * x + rotationMatrix[0][1] * y + rotationMatrix[0][2] * z;
            const transformedY = rotationMatrix[1][0] * x + rotationMatrix[1][1] * y + rotationMatrix[1][2] * z;
            const transformedZ = rotationMatrix[2][0] * x + rotationMatrix[2][1] * y + rotationMatrix[2][2] * z;

            const translateX = (sizeRef.current * transformedX) / 2;
            const translateY = (sizeRef.current * transformedY) / 2;
            const scale = (transformedZ + 2) / 3;
            const transform = `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;
            const opacity = (transformedZ + 1.5) / 2.5;

            tag.style.transform = transform;
            tag.style.opacity = opacity;
        });
    };

    const update = (sphere, tagsElements) => {
        rotationAngleRef.current += rotationSpeedRef.current;
        updatePositions(sphere, tagsElements);
        frameRequestIdRef.current = requestAnimationFrame(() => update(sphere, tagsElements));
    };

    useEffect(() => {
        const cloud = cloudRef.current;
        const tagsElements = cloud.querySelectorAll('li');
        sizeRef.current = cloud.offsetWidth;

        const sphere = new FibonacciSphere(tagsElements.length);

        const onMouseMove = (e) => {
            const rect = cloud.getBoundingClientRect();
            const deltaX = e.clientX - (rect.left + cloud.offsetWidth / 2);
            const deltaY = e.clientY - (rect.top + cloud.offsetHeight / 2);
            const a = Math.atan2(deltaX, deltaY) - Math.PI / 2;
            const axis = [Math.sin(a), Math.cos(a), 0];
            const delta = Math.sqrt(deltaX ** 2 + deltaY ** 2);
            const speed = delta / Math.max(window.innerHeight, window.innerWidth) / 10;

            rotationAxisRef.current = axis;
            rotationSpeedRef.current = speed;
        };

        updatePositions(sphere, tagsElements);
        window.addEventListener('resize', () => updatePositions(sphere, tagsElements));
        document.addEventListener('mousemove', onMouseMove);

        cloud.classList.add(styles.loaded);
        update(sphere, tagsElements);

        return () => {
            cancelAnimationFrame(frameRequestIdRef.current);
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <ul ref={cloudRef} className={styles.tagsCloud}>
            {tags.map((tag, index) => (
                <li key={index} className={styles.tag}>
                    <span className={styles.wrap}>{tag}</span>
                </li>
            ))}
        </ul>
    );
};

export default TagsCloud;
