import * as THREE from "three";
import SceneInit from "./lib/SceneInit";
import Planet from "./lib/Planets";
import {planets, sun} from './lib/PlanetData';


let multiplier = 100;


let scene = new SceneInit();
scene.initScene();
scene.animate();

const sunGeometry = new THREE.SphereGeometry(8);
const sunTexture = new THREE.TextureLoader().load("/2k_sun.jpg")
const sunMaterial = new THREE.MeshBasicMaterial({
  map: sunTexture
});
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);

const solarSystem = new THREE.Group();
solarSystem.add(sunMesh);

solarSystem.add(sunMesh);
scene.scene.add(solarSystem);

const mercury = new Planet(2, 16, "/2k_mercury.jpg");
const mercuryMesh = mercury.getMesh();
let mercurySystem = new THREE.Group();
mercurySystem.add(mercuryMesh);

const venus = new Planet(3, 32, "/2k_venus_surface.jpg");
const venusMesh = venus.getMesh();
let venusSystem = new THREE.Group();
venusSystem.add(venusMesh);

const earth = new Planet(4, 48, "/2k_earth_daymap.jpg");
const earthMesh = earth.getMesh();
let earthSystem = new THREE.Group();
earthSystem.add(earthMesh);

const mars = new Planet(3, 64, "/2k_mars.jpg");
const marsMesh = mars.getMesh();
let marsSystem = new THREE.Group();
marsSystem.add(marsMesh);

const jupiter = new Planet(6, 128, "/2k_jupiter.jpg");
const jupiterMesh = jupiter.getMesh();
let jupiterSystem = new THREE.Group();
jupiterSystem.add(jupiterMesh);

const saturn = new Planet(5, 256, '/2k_saturn.jpg');
const saturnMesh = saturn.getMesh();
let saturnSystem = new THREE.Group();
saturnSystem.add(saturnMesh);

// Saturn ring
// const ringGeometry = new THREE.TorusGeometry(300, 100, 160, 100);
// const ringMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00, side: THREE.DoubleSide });
// const rings = new THREE.Mesh(ringGeometry, ringMaterial);
// rings.rotation.x = Math.PI / 2; // Rotate rings to be horizontal
// saturnSystem.add(rings);


const uranus = new Planet(5, 356, '/2k_uranus.jpg');
const uranusMesh = uranus.getMesh();
let uranusSystem = new THREE.Group();
uranusSystem.add(uranusMesh);

const neptune = new Planet(5, 456, '/2k_neptune');
const neptuneMesh = neptune.getMesh();
let neptuneSystem = new THREE.Group();
neptuneSystem.add(neptuneMesh);

solarSystem.add(mercurySystem, venusSystem, earthSystem, marsSystem, jupiterSystem, saturnSystem, uranusSystem, neptuneSystem);

venusSystem.rotation.x = 0.5
const earth_year = 2 * Math.PI * (1/60) * (1/60);
const animate = () => {
  sunMesh.rotation.y += 0.001;
  mercurySystem.rotation.y += planets[0].rotationSpeed * multiplier;
  venusSystem.rotation.y += planets[1].rotationSpeed * multiplier;
  earthSystem.rotation.y += planets[2].rotationSpeed * multiplier;
  marsSystem.rotation.y += planets[3].rotationSpeed * multiplier;
  jupiterSystem.rotation.y += planets[4].rotationSpeed * multiplier;
  saturnSystem.rotation.y += planets[5].rotationSpeed * multiplier;
  uranusSystem.rotation.y += planets[6].rotationSpeed * multiplier;
  neptuneSystem.rotation.y += planets[7].rotationSpeed * multiplier;

  requestAnimationFrame(animate);
};

animate();