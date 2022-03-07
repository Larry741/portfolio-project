import { Canvas } from '@react-three/fiber'

const PageLoader = () => {

  return <>
    <Canvas colorManagement camera={{position: [0, 0, 300]}} ></Canvas>
  </>
}

export default PageLoader;