import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  BoxGeometry,
  MeshStandardMaterial,
} from "three";

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

const renderer = new WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cube = new Mesh();
const geometry = new BoxGeometry();
const material = new MeshStandardMaterial();
cube.geometry = geometry;
cube.material = material;

scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
