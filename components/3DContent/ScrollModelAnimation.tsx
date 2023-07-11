import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import { DivContainer } from "../Structure/Scrollpage";
import { loadGLTFModel } from "../../lib/model";

const ScrollModelAnimation = () => {
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const [_camera, setCamera] = useState();
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();

  const refContainer = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const parameters = {
      materialColor: "#ffeded",
    };
    const { current: container } = refContainer;

    if (container && !renderer) {
      //Texture
      const textureLoader = new THREE.TextureLoader();
      const particlesTexture = textureLoader.load("/textures/particles/1.png");


      //Object
      loadGLTFModel(scene, "/Desktop.glb", {
        receiveShadow: true,
        castShadow: true,
      }).then(() => {
        setLoading(false);
      });

      const mesh5 = new THREE.Mesh(
        new THREE.SphereGeometry(1),
        new THREE.MeshStandardMaterial({
          color: "white",
          wireframe: true,
        })
      );

      mesh5.position.x = 1.5;

      mesh5.position.y = -12;

      scene.add(mesh5);
      const sectionMeshes = [mesh5];

      //Lights
      const directioanlLight = new THREE.DirectionalLight(0xffffff, 1);
      directioanlLight.position.set(1, 1, 0);
      directioanlLight.castShadow = true;
      scene.add(directioanlLight);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      //Particle geometry
      const particlesGeometry = new THREE.BufferGeometry();
      const count = 2000;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] =
          10 * 0.5 -
          Math.random() * 10 * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        colors[i] = Math.random();
      }
      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
    //   particlesGeometry.setAttribute(
    //     "color",
    //     new THREE.BufferAttribute(colors, 3)
    //   );
      //Particles Material
      const particlesMaterial = new THREE.PointsMaterial();
      particlesMaterial.size = 0.1;
      particlesMaterial.sizeAttenuation = true;
    //   particlesMaterial.color = new THREE.Color("#ff88cc");
      particlesMaterial.transparent = true;
      particlesMaterial.alphaMap = particlesTexture;
      particlesMaterial.depthWrite = false;
      //particlesMaterial.depthTest = false;
      particlesMaterial.blending = THREE.AdditiveBlending;
    //   particlesMaterial.vertexColors = true;

      //particles
      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      //sizes
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      //camera
      //Camera Group
      const cameraGroup = new THREE.Group();
      scene.add(cameraGroup);

      //Base Camera
      const camera = new THREE.PerspectiveCamera(
        35,
        sizes.width / sizes.height,
        0.1,
        100
      );
      camera.position.z = 6;

      cameraGroup.add(camera);

      //Renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.shadowMap.enabled = true;
      container.appendChild(renderer.domElement);

      //Resize
      window.addEventListener("resize", () => {
        //update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        //update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        //update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });
      //Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;

      //Scroll
      let scrollY = window.scrollY;
      let currentSection = 0;

      window.addEventListener("scroll", () => {
        scrollY = window.scrollY;
        const newSection = Math.round(scrollY / sizes.height);

        // if (newSection != currentSection) {
        //   currentSection = newSection;

        //   gsap.to(sectionMeshes[currentSection].rotation, {
        //     duration: 1.5,
        //     ease: "power2.inOut",
        //     x: "+=6",
        //     y: "+=3",
        //     z: "+=1.5",
        //   });
        // }
      });
      //Cursor
      type Cursor = {
        x?: number;
        y?: number;
      }

      const cursor: Cursor = {};
      cursor.x = 0;
      cursor.y = 0;

      window.addEventListener("mousemove", (e) => {
        cursor.x = e.clientX / sizes.width - 0.5;
        cursor.y = e.clientY / sizes.height - 0.5;
      });
      //Animate
      const clock = new THREE.Clock();
      let previousTime = 0;

      const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        const deltaTime = elapsedTime - previousTime;
        previousTime = elapsedTime;

        //animate particles
        particles.rotation.y = elapsedTime * 0.02;

        //animate camera
        camera.position.y = (-scrollY / sizes.height) * 5;

        const parallaxX = -cursor.x * 0.5;
        const parallaxY = cursor.y * 0.5;

        cameraGroup.position.x +=
          (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
        cameraGroup.position.y +=
          (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

        //animate meshes
        for (const mesh of sectionMeshes) {
          mesh.rotation.x += deltaTime * 0.1;
          mesh.rotation.y += deltaTime * 0.12;
        }

        //render
        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  return (
    <DivContainer ref={refContainer}></DivContainer>
  );
};

export default ScrollModelAnimation;
