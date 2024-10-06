import * as THREE from "three";
import SceneInit from "./lib/SceneInit";
import Planet from "./lib/Planets";
import { planets } from "./lib/PlanetData";

let multiplierSlider = document.getElementById('multiplierSlider')
let multiplier = parseFloat(multiplierSlider.value);
multiplierSlider.addEventListener('input', (event) => {
  multiplier = parseFloat(event.target.value)
})

let scene = new SceneInit();
scene.initScene();
scene.animate();

// Create the star field
const starsGeometry = new THREE.BufferGeometry();
const starsCount = 50000; // Number of stars
const positions = new Float32Array(starsCount * 3); // x, y, z for each star
const sizes = new Float32Array(starsCount); // Size for each star

for (let i = 0; i < starsCount; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 1000; // x position
  positions[i * 3 + 1] = (Math.random() - 0.5) * 1000; // y position
  positions[i * 3 + 2] = (Math.random() - 0.5) * 1000; // z position

  sizes[i] = Math.random() * 2 + 1;
}

starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
starsGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

const starsMaterial = new THREE.PointsMaterial({ color: 0x888888, size: 0.5 });
const stars = new THREE.Points(starsGeometry, starsMaterial);

const sunGeometry = new THREE.SphereGeometry(15, 50, 50);
const sunTexture = new THREE.TextureLoader().load("/2k_sun.jpg");
const sunMaterial = new THREE.MeshBasicMaterial({
  map: sunTexture,
});
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);

const solarSystem = new THREE.Group();
solarSystem.add(sunMesh);
solarSystem.add(stars);

solarSystem.add(sunMesh);
scene.scene.add(solarSystem);

const mercury = new Planet(3.2, 28, "/2k_mercury.jpg");
const mercuryMesh = mercury.getMesh();
let mercurySystem = new THREE.Group();
mercurySystem.add(mercuryMesh);

const venus = new Planet(5.8, 44, "/2k_venus_surface.jpg");
const venusMesh = venus.getMesh();
let venusSystem = new THREE.Group();
venusSystem.add(venusMesh);

const earth = new Planet(6, 62, "/2k_earth_daymap.jpg");
const earthMesh = earth.getMesh();
let earthSystem = new THREE.Group();
earthSystem.add(earthMesh);

const mars = new Planet(4, 78, "/2k_mars.jpg");
const marsMesh = mars.getMesh();
let marsSystem = new THREE.Group();
marsSystem.add(marsMesh);

const jupiter = new Planet(12, 100, "/2k_jupiter.jpg");
const jupiterMesh = jupiter.getMesh();
let jupiterSystem = new THREE.Group();
jupiterSystem.add(jupiterMesh);

const saturn = new Planet(10, 138, "/2k_saturn.jpg");
const saturnMesh = saturn.getMesh();
let saturnSystem = new THREE.Group();
saturnSystem.add(saturnMesh);

const ringGeo = new THREE.RingGeometry(
  12,
  20
);
const ringMat = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('/saturnringcolor.jpg'),
  side: THREE.DoubleSide,
});
const ringMesh = new THREE.Mesh(ringGeo, ringMat);
saturnSystem.add(ringMesh);
ringMesh.position.set(saturnMesh.position.x, 0, 0);
ringMesh.rotation.x = -0.5 * Math.PI;

// Position and rotate the rings
//TODO: fix ring
ringMesh.rotation.x = Math.PI / 2; // Rotate to lay flat
ringMesh.position.x = saturnMesh.position.x;
saturnSystem.add(ringMesh);

const uranus = new Planet(7, 176, "/2k_uranus.jpg");
const uranusMesh = uranus.getMesh();
let uranusSystem = new THREE.Group();
uranusSystem.add(uranusMesh);

const neptune = new Planet(7, 200, "/2k_neptune");
const neptuneMesh = neptune.getMesh();
let neptuneSystem = new THREE.Group();
neptuneSystem.add(neptuneMesh);


solarSystem.add(
  mercurySystem,
  venusSystem,
  earthSystem,
  marsSystem,
  jupiterSystem,
  saturnSystem,
  uranusSystem,
  neptuneSystem
);

const animate = () => {
  sunMesh.rotation.y += 0.001;
  mercurySystem.rotation.y += planets[0].rotationSpeed * multiplier * 100;
  venusSystem.rotation.y += planets[1].rotationSpeed * multiplier * -400;
  earthSystem.rotation.y += planets[2].rotationSpeed * multiplier;
  marsSystem.rotation.y += planets[3].rotationSpeed * multiplier;
  jupiterSystem.rotation.y += planets[4].rotationSpeed * multiplier;
  saturnSystem.rotation.y += planets[5].rotationSpeed * multiplier;
  uranusSystem.rotation.y += planets[6].rotationSpeed * multiplier;
  neptuneSystem.rotation.y += planets[7].rotationSpeed * multiplier;
  
  // Orbital Tilt
  mercurySystem.rotation.x = 0.000593
  venusSystem.rotation.x = 3.094
  earthSystem.rotation.x = 0.410
  marsSystem.rotation.x = 0.440
  jupiterSystem.rotation.x = 0.054
  saturnSystem.rotation.x = 0.466
  uranusSystem.rotation.x = 1.706
  neptuneSystem.rotation.x = 0.494
  
  requestAnimationFrame(animate);
};

animate();
