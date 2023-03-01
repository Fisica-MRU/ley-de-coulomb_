function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  let baseDePreguntas = [
    {
      pregunta: "La fuerza entre dos cargas iguales distanciadas por 1 cm es igual a 90 N. ¿Cuál es la magnitud de estas dos cargas?",
      imagen: "1.webp",
      respuesta: "+- 1x10^-6 C",
      distractores: ["+- 2x10^-5 C", "+- 3x30^-1 C", "+- 2x10^-6 C"],
    },
    {
      pregunta: "Cuatro cargas se encuentran en las esquinas de un cuadrado respectivamente, en donde los lados del cuadrado tiene una longitud de 0.05 metros. La carga superior izquierda tiene un valor de q, la esquina superior derecha -q, la esquina inferior izquierda 2q y la esquina inferior derecha cuenta con una carga de -2q. Si la magnitud de la carga q es de 1x10-7 Coulomb. ¿ Cuál será la magnitud de la fuerza ejercida sobre la carga inferior izquierda en el sistema?",
      imagen: "2.webp",
      respuesta: "0.17N",
      distractores: ["0.27N", "0.47N", "0.77N"],
    },
    {
      pregunta: " Dos esferas iguales se encuentran separadas por una longitud de 35 centímetros. ¿Cuántos electrones en exceso estarán presentes en cada esfera si la magnitud de la fuerza de repulsión entre ellas es de 2.20x10-21 N?",
      imagen: "3.webp",
      respuesta: "1062 electrones",
      distractores: ["1050 electrones", "1034 electrones", "1052 electrones"],
    },
  ];