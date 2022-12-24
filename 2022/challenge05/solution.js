function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return Math.max(...[...giftsCities.reduce((x, y) => 
    x.concat(x.map(x => [y].concat(x))), [[]])]
    .filter(item => item.length <= maxCities)
    .map(subset => subset.reduce((a, b) => a + b, 0))
    .filter(item => item <= maxGifts))
}

// Explicacion
// El problema tenia varias soluciones, se podia hacer de manera iterativa, utilizando recursividad con backtracking o la mas optima
// que es obteniendo todas las combinaciones posibles utilizando un reduce y concatenando todos los resultados que se van formando en el map.
// Luego se filtra aquellos que sean menores que la maxima cantidad de ciudades, se realiza una sumatoria y de esa suma se filtra
// aquellos que sean menores que la maxima cantidad de regalos.