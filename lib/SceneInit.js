import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let theta = 0;

export default class SceneInit {
  constructor(fov = 36, camera, scene, controls, renderer) {
    this.fov = fov;
    this.scene = scene;
    this.camera = camera;
    this.controls = controls;
    this.renderer = renderer;
  }

  initScene() {
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      100000
    );
    this.camera.position.set(-100, 160, 450);

    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById("myCanvas"),
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.02;

    window.addEventListener("resize", () => this.onWindowResize(), false);
  }
  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    // theta = 0.01;
    // this.camera.position.x += theta;
    // // this.camera.position.y += 0.05;
    // this.camera.position.z += theta;
    this.render();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
