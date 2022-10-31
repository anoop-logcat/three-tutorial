import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  BoxGeometry,
  MeshStandardMaterial,
  ACESFilmicToneMapping,
  sRGBEncoding,
  PointLight,
} from "three";
import Cube from "./cube";

const scene = new Scene();

const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new WebGLRenderer({ alpha: true, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = ACESFilmicToneMapping;
renderer.outputEncoding = sRGBEncoding;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cube = new Cube();
scene.add(cube);

const pointLight = new PointLight();
pointLight.position.set(9, 9, 9);
scene.add(pointLight);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  cube.update();
}

animate();
