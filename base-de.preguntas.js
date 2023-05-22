function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  let baseDePreguntas = [
    {
      pregunta: "Utilice la ley de Ampère para calcular el campo magnético debido a una corriente constante I en un cable lineal infinito y delgado como se muestra en la Figura 12.15.",
      imagen: "1.jpg",
      respuesta: "B= μ0I/2πr.",
      distractores: ["B= μ0I/3πr.", "B= μ0I/8πr.", "B= μ0I/1πr."],
    },
    {
      pregunta: "El radio del cable lineal y largo de la Figura 12.16 es a, y el cable lleva una corriente I subindice 0 que se distribuye uniformemente en su sección transversal. Calcule el campo magnético tanto dentro como fuera del cable.",
      imagen: "2.jpg",
      respuesta: "B=μ0I0/2πr (r≥a). ",
      distractores: ["B=μ0I0/2πr (r=a). ", "B=μ0I0/3πr (r≥a). ", "B=μ0I0/3πr (r=a). "],
    },
    {
      pregunta: "Utilice la ley de Ampère para evaluar  ∮B⃗ ⋅dl⃗      para las configuraciones y trayectorias actuales en la Figura 12.18.",
      imagen: "3.jpg",
      respuesta: "A y  ∮B⃗ ⋅dl⃗ =μ0(9A)=1,13×10–5T⋅m.s",
      distractores: ["  ∮B⃗ ⋅dl⃗ =μ0(9A)=1,13×10–5T⋅m. y A = 9", "A y  ∮B⃗ ⋅dl⃗ =μ0(6A)=1,13×10–5T⋅m.", "A y  ∮B⃗ ⋅dl⃗ =μ0(9A)=1,23×10–5T⋅m."],
    },
  ];