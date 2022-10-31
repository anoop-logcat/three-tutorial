import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";

class Cube extends Mesh {
  constructor(
    readonly geometry: BoxGeometry = new BoxGeometry(),
    readonly material: MeshStandardMaterial = new MeshStandardMaterial()
  ) {
    super();
    this.geometry = geometry;
    this.material = material;
  }

  update() {
    this.rotation.x += 0.01;
    this.rotation.y += 0.01;
  }
  dispose() {
    this.geometry.dispose();
  }
}

export default Cube;
