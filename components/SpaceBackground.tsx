import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SpaceBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // Starfield
        const starCount = 3000;
        const starGeometry = new THREE.BufferGeometry();
        const starPositions = new Float32Array(starCount * 3);
        const starColors = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount; i++) {
            const i3 = i * 3;
            starPositions[i3] = (Math.random() - 0.5) * 800;
            starPositions[i3 + 1] = (Math.random() - 0.5) * 800;
            starPositions[i3 + 2] = (Math.random() - 0.5) * 800;

            const brightness = 0.5 + Math.random() * 0.5;
            starColors[i3] = brightness;
            starColors[i3 + 1] = brightness;
            starColors[i3 + 2] = 1.0; // Slightly bluish
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

        const starMaterial = new THREE.PointsMaterial({
            size: 1.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true
        });

        const starField = new THREE.Points(starGeometry, starMaterial);
        scene.add(starField);

        // Black Hole (Gargantua Style)
        // 1. Accretion Disk Shader with better noise and lensing feel
        const diskShader = {
            uniforms: {
                uTime: { value: 0 },
            },
            vertexShader: `
                varying vec2 vUv;
                varying vec3 vPosition;
                void main() {
                    vUv = uv;
                    vPosition = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                varying vec2 vUv;
                varying vec3 vPosition;

                // Simple noise function
                float noise(vec2 p) {
                    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
                }

                void main() {
                    float dist = length(vPosition.xz);
                    float diskInner = 2.8;
                    float diskOuter = 10.0;
                    
                    if (dist < diskInner || dist > diskOuter) {
                        discard;
                    }

                    float angle = atan(vPosition.z, vPosition.x);
                    
                    // Moving noise for the disk
                    float n = noise(vec2(dist * 0.5 - uTime * 0.1, angle * 1.5));
                    
                    float intensity = pow(1.0 - (dist - diskInner) / (diskOuter - diskInner), 2.0);
                    intensity *= 0.7 + 0.3 * sin(angle * 3.0 + uTime * 4.0);
                    intensity *= 0.8 + 0.2 * n;

                    // Interstellar colors: Bright white/yellow inner, orange/red outer
                    vec3 color = mix(vec3(1.0, 0.9, 0.5), vec3(1.0, 0.4, 0.1), (dist - diskInner) / (diskOuter - diskInner));
                    
                    // Add some "flicker"
                    float flicker = 0.9 + 0.1 * sin(uTime * 10.0 + dist);
                    
                    gl_FragColor = vec4(color * flicker, intensity * 0.9);
                }
            `
        };

        // Event Horizon
        const horizonGeo = new THREE.SphereGeometry(3.5, 64, 64);
        const horizonMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const eventHorizon = new THREE.Mesh(horizonGeo, horizonMat);
        scene.add(eventHorizon);

        // Core Glow (The bright halo right around the horizon)
        const coreGlowGeo = new THREE.SphereGeometry(3.6, 64, 64);
        const coreGlowMat = new THREE.MeshBasicMaterial({ 
            color: 0xffaa44, 
            transparent: true, 
            opacity: 0.3, 
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide
        });
        const coreGlow = new THREE.Mesh(coreGlowGeo, coreGlowMat);
        scene.add(coreGlow);

        // Accretion Disk
        const diskGeo = new THREE.TorusGeometry(8, 2.0, 2, 128);
        const diskMat = new THREE.ShaderMaterial({
            uniforms: diskShader.uniforms,
            vertexShader: diskShader.vertexShader,
            fragmentShader: diskShader.fragmentShader,
            transparent: true,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending
        });
        const disk = new THREE.Mesh(diskGeo, diskMat);
        disk.rotation.x = Math.PI / 2.05;
        scene.add(disk);

        // Einstein Ring / Gravitational Lensing Glow
        const ringGeo = new THREE.TorusGeometry(4.5, 0.15, 16, 100);
        const ringMat = new THREE.MeshBasicMaterial({ 
            color: 0xffcc88, 
            transparent: true, 
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.lookAt(camera.position);
        scene.add(ring);

        // Nebula/Glow component
        const nebulaCount = 8;
        for (let i = 0; i < nebulaCount; i++) {
            const nebulaGeo = new THREE.PlaneGeometry(80, 80);
            const nebulaMat = new THREE.MeshBasicMaterial({
                color: i % 2 === 0 ? 0x221144 : 0x112244,
                transparent: true,
                opacity: 0.04,
                depthWrite: false,
                blending: THREE.AdditiveBlending
            });
            const nebula = new THREE.Mesh(nebulaGeo, nebulaMat);
            nebula.position.set(
                (Math.random() - 0.5) * 150,
                (Math.random() - 0.5) * 150,
                -30 - Math.random() * 70
            );
            nebula.rotation.z = Math.random() * Math.PI;
            scene.add(nebula);
        }

        camera.position.z = 20;
        camera.position.y = 4;

        // Animation Loop
        let frame = 0;
        const animate = () => {
            frame = requestAnimationFrame(animate);
            const time = performance.now() * 0.001;
            
            diskShader.uniforms.uTime.value = time;
            
            disk.rotation.z += 0.01;
            ring.lookAt(camera.position);
            coreGlow.scale.setScalar(1 + Math.sin(time * 2.0) * 0.02);
            
            // Camera orbit
            camera.position.x = Math.sin(time * 0.08) * 4.0;
            camera.position.y = Math.cos(time * 0.04) * 3.0 + 4;
            camera.lookAt(0, 0, 0);

            starField.rotation.y += 0.0001;
            
            renderer.render(scene, camera);
        };

        animate();

        // Handle Resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frame);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            scene.clear();
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            className="fixed inset-0 z-[-1] pointer-events-none bg-slate-950"
            style={{ 
                background: 'radial-gradient(circle at center, #0f172a 0%, #020617 100%)'
            }}
        />
    );
};

export default SpaceBackground;
