/* eslint-disable react/no-unescaped-entities */
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls";

import styles from "./About.module.scss";

const About = () => {
  const contactRef = useRef();

  useEffect(() => {
    contactRef.current = document.getElementById("contact");

    const canvas = document.querySelector(`#${styles.canvas1}`);

    // renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(
      renderer.domElement.clientWidth,
      renderer.domElement.clientHeight,
      false
    );

    //scene
    const scene = new THREE.Scene();
    scene.background = null;

    // camera
    let camera = new THREE.PerspectiveCamera(
      40,
      renderer.domElement.clientWidth / renderer.domElement.clientHeight,
      1,
      1475
    );
    camera.position.set(-5, 5, 0);
    // camera.lookAt(scene.position);

    let controls = new OrbitControls(camera, renderer.domElement);
    // controls.minPolarAngle = Math.PI / 2;
    // controls.maxPolarAngle = Math.PI / 2;
    // controls.minDistance = 0;
    // controls.autoRotate = true;
    controls.enableZoom = false;
    controls.enablePan = false;

    // controls.addEventListener("onMouseOver", () => {
    //   renderer.render(scene, camera);
    // })

    // lightning
    const light = new THREE.HemisphereLight(0xffffff, 1);
    light.position.set(-1, 2, 4);
    scene.add(light);

    const geo = new THREE.SphereBufferGeometry(1.7, 72, 36);
    const mat = new THREE.MeshPhongMaterial({
      // opacity: 0.0,
      // transparent: true,
      color: "cyan",
    });
    const globe = new THREE.Mesh(geo, mat);
    // scene.add(globe);

    let spriteObjects = [];
    let texts = [
      "Reactjs",
      "Express",
      "Javascript",
      "Nodejs",
      "Nextjs",
      "Sass",
      "Threejs",
      "Solidity",
      "Graphql",
      "Html",
      "Mongodb",
      "Css",
      "Rest",
      "Git",
      "Bem",
    ];
    let mainRadius = 2;
    let objRadius = 0.4;
    let num = 5

    for (let i = 0; i < texts.length; i++) {
      let z;

      if (i < 5) {
        mainRadius = 1.7;
        z = 0;
      } else if (i < 9) {
        mainRadius = 1.2;
        z = -1.1;
        num = 4
      } else if (i < 13) {
        mainRadius = 1.2;
        z = 1.1;
        num = 4
      } else if (i < 14) {
        mainRadius = .1;
        z = -2;
        num = 1;
      } else if (i < 15) {
        mainRadius = .05;
        z = 2;
        num = 1;
      }

      let angleStep = (Math.PI * 2) / num;
      let step = angleStep * i;
      let txt = texts[i];
      let radius = objRadius + mainRadius;
      let x = Math.cos(step) * radius;
      let y = Math.sin(step) * radius;

      let textSprite = createText(x, y, z, txt);
      spriteObjects.push(textSprite);
    }

    function createText(x, y, z, txt) {
      let fontSize = (txt === "Javascript") ? 40 : 44;
  
      var canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      var ctx = canvas.getContext("2d");
      ctx.font = `Bold ${fontSize}pt Arial`;
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(txt, 128, 44);
      // console.log(ctx);
      var tex = new THREE.Texture(canvas);
      tex.needsUpdate = true;
      var spriteMat = new THREE.SpriteMaterial({
        map: tex,
      });
      var sprite = new THREE.Sprite(spriteMat);
      sprite.center.set(0.5, 0.9);

      scene.add(sprite);

      return {
        mesh: sprite,
        axis: new THREE.Vector3(0, 0, 1),
        speed: Math.PI * 0.05,
        position: new THREE.Vector3(x, y, z),
        time: 0,
        update: function (t) {
          this.time += t;
          this.mesh.position
            .copy(this.position)
            .applyAxisAngle(this.axis, this.speed * this.time);
          this.mesh.rotateOnWorldAxis(this.axis, this.speed * t);
        },
      };
    }

    function resizeCanvasToDisplaySize() {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width || canvas.height !== height) {
        // you must pass false here or three.js sadly fights the browser
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        // set render target sizes here
      }
    }

    let clock = new THREE.Clock();

    function render(time) {
      resizeCanvasToDisplaySize();
      let t = clock.getDelta();

      resizeCanvasToDisplaySize();
      spriteObjects.forEach(function (textObj) {
        let sprite = textObj.mesh;
        let spritePosition;
        
        let scaleFactor = 3.6;
        let scale = Math.abs(scaleFactor / (camera.position.y - sprite.position.y))

        if (scale < 1) {
          
        }
        
        sprite.scale.set(scale, scale, 1);
        textObj.update(t);
      });

      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  });

  const scrollTo = (event) => {
    if (event.target.innerText === "Get In Touch!") {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.header}>
        <div></div>
        <h2 className="primaryHeader">About</h2>
        <div></div>
      </div>
      <div className={styles.body}>
        <div className={styles.para}>
          <p className="secondaryText">
            I'm a self-taught full stack web developer with over 5 years worth
            of opportunities working with a wide array of companies and
            individuals that has afforded me a significant amount of experience.
            {/* have gained invaluable knowledge ?? */}
          </p>
          <p className="secondaryText">
            I'm passionate about using my problem solving skills in creating
            fascinating solutions to problems and bringing ideas to life writing
            clean, efficient and maintainable code. I've made numerous side
            projects and especially love manipulating react for spell-binding
            UI.
          </p>
          <p className="secondaryText">
            I currently work remotely with a selected freelance client base
            being open for new opportunities.
          </p>
          <a onClick={scrollTo}>Get In Touch!</a>
        </div>
        <canvas id={styles.canvas1} />
      </div>
    </section>
  );
};

export default About;
