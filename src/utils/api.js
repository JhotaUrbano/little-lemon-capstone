export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

export function updateTimes(date) {
  // Simulación: cambia las horas según la fecha (no importa cómo, solo que cambie)
  const baseTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const day = new Date(date).getDate();
  
  // Variación mínima aceptable
  return day % 2 === 0
    ? baseTimes
    : baseTimes.filter((t) => t !== "19:00");
}
