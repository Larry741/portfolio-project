import { useEffect, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from 'three/src/core/Object3D';
import { AnimationClip } from 'three/src/animation/AnimationClip'

// interface group {
//   current : {
//     rotation: {
//       x: Number;
//       y: Number;
//     }
//   }
// } 

// interface actions {
//   current: {
//     idle: {
//       play: () => {}
//     },
//   };
// } 

const Model = () => {
  const group = useRef()
  const actions = useRef();

  const [model, setModel] = useState(null);
  const [animation, setAnimation] = useState(null);

  const mixer = new THREE.AnimationMixer(null);

  useEffect(() => {
    
  })
}

export default Model;