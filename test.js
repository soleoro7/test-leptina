function calcularResultado() {
  let total = 0;

  // Recorre las 10 preguntas
  for (let i = 1; i <= 10; i++) {
    const respuesta = document.querySelector('input[name="q' + i + '"]:checked');
    if (respuesta) {
      total += parseInt(respuesta.value);
    }
  }

  // Define mensaje según el puntaje total
  let mensaje = "";
  if (total <= 3) {
    mensaje = "✨ Señales leves o ausentes de resistencia a la leptina. Tu sistema parece responder bien, pero podés fortalecerlo con hábitos circadianos, buena exposición solar y descanso reparador.";
  } else if (total <= 6) {
    mensaje = "⚠️ Hay indicios moderados de resistencia a la leptina. Tu cuerpo puede estar desconectado de su señal natural de saciedad, energía y ritmo. Es un buen momento para recuperar tu brújula interna.";
  } else {
    mensaje = "🔥 Alta probabilidad de resistencia a la leptina. Esto puede estar afectando tu metabolismo, apetito, sueño y estado emocional. Tu cuerpo necesita volver a su ritmo natural con un plan de nutrición funcional y regulación circadiana.";
  }

  // Mostrar resultado
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = mensaje;

  // Si querés agregar una llamada a la acción (opcional)
  const ctaExistente = document.getElementById("cta-button");
  if (!ctaExistente) {
    const cta = document.createElement("a");
    cta.id = "cta-button";
    cta.href = "https://nutriolistica.my.canva.site/sitioweb"; // Cambiá por el link real
    cta.textContent = "Quiero empezar a equilibrar mi leptina";
    cta.style.display = "inline-block";
    cta.style.marginTop = "1.5rem";
    cta.style.padding = "0.75rem 1.2rem";
    cta.style.backgroundColor = "#d16f6f";
    cta.style.color = "white";
    cta.style.borderRadius = "8px";
    cta.style.textDecoration = "none";
    cta.style.fontWeight = "bold";

    resultDiv.appendChild(cta);
  }
}
