function getAcceleration(properties) {
  let acceleration;

  if (properties.f !== undefined && properties.m !== undefined) {
    // Using a = F/m
    acceleration = properties.f / properties.m;
  } else if (properties.Δv !== undefined && properties.Δt !== undefined) {
    // Using a = Δv/Δt
    acceleration = properties.Δv / properties.Δt;
  } else if (properties.d !== undefined && properties.t !== undefined) {
    // Using a = 2d/t^2
    acceleration = (2 * properties.d) / properties.t ** 2;
  } else {
    return "impossible";
  }

  // Check if the calculated acceleration is finite and valid
  if (isFinite(acceleration)) {
    return acceleration;
  } else {
    return "impossible";
  }
}
