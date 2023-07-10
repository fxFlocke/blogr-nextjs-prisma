import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const tl = gsap.timeline();
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "desktop";
        obj.scale.set(0.4, 0.4, 0.4);
        obj.position.y = 0;
        obj.position.x = 5;
        obj.receiveShadow = true;
        obj.castShadow = true;
        // obj.rotateY(Math.PI / 2);

        scene.add(obj);
        tl.to(obj.position, { x: 1.5, y: 0, z: -1, duration: 3 });
        tl.to(obj.rotation, { y: Math.PI * 2 * 2.3, duration: 3 });

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        resolve(obj);

        function animate()
        {
          requestAnimationFrame( animate );
          obj.rotation.y += 0.01;
        }

        animate();
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}
