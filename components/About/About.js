/* eslint-disable react/no-unescaped-entities */
import { useRef, useEffect } from 'react';
import * as THREE from "three";
import { FontLoader } from 'three';

import styles from './About.module.scss';

const About = () => {
  const contactRef = useRef();

  useEffect(() => {
    contactRef.current = document.getElementById("contact");
  });

  useEffect(() => {
    const main = () => {
      const canvas = document.querySelector(`#${styles.canvas1}`);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

      const fov = 75;
      const aspect = 2; // the canvas default
      const near = 0.1;
      const far = 5;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.z = 2;

      const scene = new THREE.Scene();
      scene.background = null
      
      const geometry = new THREE.SphereGeometry(1.1, 20, 10);
      const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
      const sphere = new THREE.Mesh(geometry, material);

      const color = 0xffffff;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);

      scene.add(light);
      scene.add(sphere);

      renderer.render(scene, camera);

      function render(time) {
        time *= 0.001; // convert time to seconds

        sphere.rotation.x = time;
        // sphere.rotation.y = time;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);
    };;

    main();

    // function main() {
    //   const canvas = document.querySelector("#c");
    //   const renderer = new THREE.WebGLRenderer({ canvas });

    //   const fov = 40;
    //   const aspect = 2; // the canvas default
    //   const near = 0.1;
    //   const far = 1000;
    //   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    //   camera.position.z = 70;

    //   const scene = new THREE.Scene();
    //   scene.background = new THREE.Color("black");

    //   function addLight(...pos) {
    //     const color = 0xffffff;
    //     const intensity = 1;
    //     const light = new THREE.DirectionalLight(color, intensity);
    //     light.position.set(...pos);
    //     scene.add(light);
    //   }
    //   addLight(-4, 4, 4);
    //   addLight(5, -4, 4);

    //   const lettersTilt = new THREE.Object3D();
    //   scene.add(lettersTilt);
    //   lettersTilt.rotation.set(
    //     THREE.Math.degToRad(-15),
    //     0,
    //     THREE.Math.degToRad(-15)
    //   );
    //   const lettersBase = new THREE.Object3D();
    //   lettersTilt.add(lettersBase);
    //   {
    //     const letterMaterial = new THREE.MeshPhongMaterial({
    //       color: "red",
    //     });
    //     const loader = new FontLoader();
    //     loader.load(
    //       "https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json",
    //       (font) => {
    //         const spaceSize = 1.0;
    //         let totalWidth = 0;
    //         let maxHeight = 0;
    //         const letterGeometries = {
    //           " ": { width: spaceSize, height: 0 }, // prepopulate space ' '
    //         };
    //         const size = new THREE.Vector3();
    //         const str = "threejs fundamentals ";
    //         const letterInfos = str.split("").map((letter, ndx) => {
    //           if (!letterGeometries[letter]) {
    //             const geometry = new THREE.TextBufferGeometry(letter, {
    //               font: font,
    //               size: 3.0,
    //               height: 0.2,
    //               curveSegments: 12,
    //               bevelEnabled: true,
    //               bevelThickness: 0.5,
    //               bevelSize: 0.3,
    //               bevelSegments: 5,
    //             });
    //             geometry.computeBoundingBox();
    //             geometry.boundingBox.getSize(size);
    //             letterGeometries[letter] = {
    //               geometry,
    //               width: size.x / 2, // no idea why size.x is double size
    //               height: size.y,
    //             };
    //           }
    //           const { geometry, width, height } = letterGeometries[letter];
    //           const mesh = geometry
    //             ? new THREE.Mesh(geometry, letterMaterial)
    //             : null;
    //           totalWidth += width;
    //           maxHeight = Math.max(maxHeight, height);
    //           return {
    //             mesh,
    //             width,
    //           };
    //         });
    //         let t = 0;
    //         const radius = totalWidth / Math.PI;
    //         for (const { mesh, width } of letterInfos) {
    //           if (mesh) {
    //             const offset = new THREE.Object3D();
    //             lettersBase.add(offset);
    //             offset.add(mesh);
    //             offset.rotation.y = (t / totalWidth) * Math.PI * 2;
    //             mesh.position.z = radius;
    //             mesh.position.y = -maxHeight / 2;
    //           }
    //           t += width;
    //         }
    //         {
    //           const geo = new THREE.SphereBufferGeometry(radius - 1, 32, 24);
    //           const mat = new THREE.MeshPhongMaterial({
    //             color: "cyan",
    //           });
    //           const mesh = new THREE.Mesh(geo, mat);
    //           scene.add(mesh);
    //         }
    //         camera.position.z = radius * 3;
    //       }
    //     );
    //   }

    //   function resizeRendererToDisplaySize(renderer) {
    //     const canvas = renderer.domElement;
    //     const width = canvas.clientWidth;
    //     const height = canvas.clientHeight;
    //     const needResize = canvas.width !== width || canvas.height !== height;
    //     if (needResize) {
    //       renderer.setSize(width, height, false);
    //     }
    //     return needResize;
    //   }

    //   function render(time) {
    //     time *= 0.001;

    //     if (resizeRendererToDisplaySize(renderer)) {
    //       const canvas = renderer.domElement;
    //       camera.aspect = canvas.clientWidth / canvas.clientHeight;
    //       camera.updateProjectionMatrix();
    //     }

    //     lettersBase.rotation.y = time * -0.5;

    //     renderer.render(scene, camera);

    //     requestAnimationFrame(render);
    //   }
    //   console.log("ran");

    //   requestAnimationFrame(render);
    // }

    // main();
  }, [])

  const scrollTo = (event) => {
    if (event.target.innerText === "Get In Touch!") {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.header}>
        <div></div>
        <h2>About</h2>
        <div></div>
      </div>
      <div className={styles.body}>
        <div className={styles.para}>
          <p>
            I'm a self-taught full stack web developer with over 5 years worth
            of opportunities working with a wide array of companies and
            individuals that has afforded me a significant amount of experience.
            {/* have gained invaluable knowledge ?? */}
          </p>
          <p>
            I'm passionate about using my problem solving skills in creating fascinating solutions to problems and
            bringing ideas to life writing clean, efficient and maintainable
            code. I've made numerous side projects and especially love
            manipulating react for spell-binding UI.
          </p>
          <p>
            I currently work remotely with a selected freelance client base
            being open for new opportunities.
          </p>
          <a onClick={scrollTo}>Get In Touch!</a>
        </div>
        <canvas id={styles.canvas1} width={500} height={400} />
        {/* <div className={styles.stack}>
          {/* <span className={styles.html}>Html</span>
          <span className={styles.react}>ReactJS</span>
          <span className={styles.next}>Next</span>
          <span className={styles.css}>Css</span>
          <span className={styles.node}>NodeJS</span>
          <span className={styles.express}>ExpressJS</span>
          <span className={styles.javascript}>Javascript</span>
          <span className={styles.mongo}>Mongodb</span>
          <span className={styles.sass}>sass</span>
          <span className={styles.git}>Git</span>
          <span className={styles.Firebase}>Redux</span>
          <span className={styles.solidity}>solidity</span>
          <span>Gulp</span> */}
        {/* </div> */}
      </div>
    </section>
  );
}

export default About;