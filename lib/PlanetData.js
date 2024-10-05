export const sun = {
  name: "Sun",
  radius: 695500, // in km (Diameter / 2)
  distanceFromSun: 0.0, // in AU
  orbitalSpeed: 0, // Not applicable for the Sun
  rotationPeriod: null, // Not applicable for the Sun
  rotationSpeed: null, // Not applicable for the Sun
};

export const planets = [
  {
    name: "Mercury",
    radius: 2440, // in km (Diameter / 2)
    distanceFromSun: 0.39, // in AU
    orbitalSpeed: 0.041, // rad/s
    rotationPeriod: 58.6, // in Earth days
    rotationSpeed: (2 * Math.PI) / (58.6 * 86400), // Convert days to rad/s
  },
  {
    name: "Venus",
    radius: 6052, // in km (Diameter / 2)
    distanceFromSun: 0.72, // in AU
    orbitalSpeed: 0.0185, // rad/s
    rotationPeriod: 243, // in Earth days
    rotationSpeed: (2 * Math.PI) / (243 * 86400), // Convert days to rad/s
  },
  {
    name: "Earth",
    radius: 6371, // in km (Diameter / 2)
    distanceFromSun: 1.0, // in AU
    orbitalSpeed: 0.0172, // rad/s
    rotationPeriod: 1, // in Earth days
    rotationSpeed: (2 * Math.PI) / (1 * 86400), // Convert days to rad/s
  },
  {
    name: "Mars",
    radius: 3390, // in km (Diameter / 2)
    distanceFromSun: 1.52, // in AU
    orbitalSpeed: 0.0096, // rad/s
    rotationPeriod: 1.03, // in Earth days
    rotationSpeed: (2 * Math.PI) / (1.03 * 86400), // Convert days to rad/s
  },
  {
    name: "Jupiter",
    radius: 69911, // in km (Diameter / 2)
    distanceFromSun: 5.2, // in AU
    orbitalSpeed: 0.0044, // rad/s
    rotationPeriod: 0.41, // in Earth days
    rotationSpeed: (2 * Math.PI) / (0.41 * 86400), // Convert days to rad/s
  },
  {
    name: "Saturn",
    radius: 58232, // in km (Diameter / 2)
    distanceFromSun: 9.58, // in AU
    orbitalSpeed: 0.0031, // rad/s
    rotationPeriod: 0.45, // in Earth days
    rotationSpeed: (2 * Math.PI) / (0.45 * 86400), // Convert days to rad/s
  },
  {
    name: "Uranus",
    radius: 25362, // in km (Diameter / 2)
    distanceFromSun: 19.22, // in AU
    orbitalSpeed: 0.0017, // rad/s
    rotationPeriod: 0.72, // in Earth days
    rotationSpeed: (2 * Math.PI) / (0.72 * 86400), // Convert days to rad/s
  },
  {
    name: "Neptune",
    radius: 24622, // in km (Diameter / 2)
    distanceFromSun: 30.05, // in AU
    orbitalSpeed: 0.0012, // rad/s
    rotationPeriod: 0.67, // in Earth days
    rotationSpeed: (2 * Math.PI) / (0.67 * 86400), // Convert days to rad/s
  },
];
