import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  ACESFilmicToneMapping,
  sRGBEncoding,
  AmbientLight,
  Raycaster,
  Vector3,
  Vector2,
  Plane,
  SphereGeometry,
  MeshStandardMaterial,
  Mesh,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new Scene();

const camera = new PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(20, 20, 20);

const renderer = new WebGLRenderer({ alpha: true, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = ACESFilmicToneMapping;
renderer.outputEncoding = sRGBEncoding;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

scene.add(new AmbientLight(0x222222));

const geometry = new SphereGeometry(1, 12, 8);
const material = new MeshStandardMaterial();
const sphere = new Mesh(geometry, material);
scene.add(sphere);

document.body.addEventListener("mousemove", onMouseMoveHandler, false);
window.addEventListener("resize", onWindowResize, false);
const raycaster = new Raycaster();
const plane = new Plane(new Vector3(0, 2, 0), 0);
const mouse = new Vector2();
const intersects = new Vector3();

function onMouseMoveHandler(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(plane, intersects);
  sphere.position.set(intersects.x, intersects.y, intersects.z);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
