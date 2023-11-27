const orbitalPeriods = {
  earth: 1.0,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

function dogYears(planet, ageInSeconds) {
  const earthYears = ageInSeconds / 31557600; // Convert seconds to Earth years
  const planetYears = earthYears / orbitalPeriods[planet]; // Convert Earth years to planet years
  const dogYearsOnPlanet = planetYears * 7; // Convert to dog years
  return dogYearsOnPlanet.toFixed(2); // Return with 2 decimal places
}
