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
const starsCount = 5000; // Number of stars
const positions = new Float32Array(starsCount * 3); // x, y, z for each star

for (let i = 0; i < starsCount; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 1000; // x position
  positions[i * 3 + 1] = (Math.random() - 0.5) * 1000; // y position
  positions[i * 3 + 2] = (Math.random() - 0.5) * 1000; // z position
}

starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const starsMaterial = new THREE.PointsMaterial({ color: 0x888888, size: 0.5 });
const stars = new THREE.Points(starsGeometry, starsMaterial);

const sunGeometry = new THREE.SphereGeometry(8);
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

const saturn = new Planet(5, 256, "/2k_saturn.jpg");
const saturnMesh = saturn.getMesh();
let saturnSystem = new THREE.Group();
saturnSystem.add(saturnMesh);

const ringGeometry = new THREE.TorusGeometry(6, 0.2, 16, 100); // (radius, tube radius, radial segments, tubular segments)
const ringMaterial = new THREE.MeshBasicMaterial({
  color: 0xaaaaaa,
  side: THREE.DoubleSide,
}); // Gray color for rings
const rings = new THREE.Mesh(ringGeometry, ringMaterial);

// Position and rotate the rings
rings.rotation.x = Math.PI / 2; // Rotate to lay flat
saturnSystem.add(rings);

const uranus = new Planet(5, 356, "/2k_uranus.jpg");
const uranusMesh = uranus.getMesh();
let uranusSystem = new THREE.Group();
uranusSystem.add(uranusMesh);

const neptune = new Planet(5, 456, "/2k_neptune");
const neptuneMesh = neptune.getMesh();
let neptuneSystem = new THREE.Group();
neptuneSystem.add(neptuneMesh);

const trailLength = 100; // Number of trail points
const trailGeometry = new THREE.BufferGeometry();
const trailPositions = new Float32Array(trailLength * 3); // x, y, z for each point

// Create trail material
const trailMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
const trailLine = new THREE.Line(trailGeometry, trailMaterial);
earthSystem.add(trailLine);


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
  mercurySystem.rotation.y += planets[0].rotationSpeed * multiplier * 10;
  venusSystem.rotation.y += planets[1].rotationSpeed * multiplier * 50;
  earthSystem.rotation.y += planets[2].rotationSpeed * multiplier;
  marsSystem.rotation.y += planets[3].rotationSpeed * multiplier;
  jupiterSystem.rotation.y += planets[4].rotationSpeed * multiplier;
  saturnSystem.rotation.y += planets[5].rotationSpeed * multiplier;
  uranusSystem.rotation.y += planets[6].rotationSpeed * multiplier;
  neptuneSystem.rotation.y += planets[7].rotationSpeed * multiplier;

  requestAnimationFrame(animate);
};

animate();
