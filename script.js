const changeColorButton = document.getElementById("changeColorButton");
const videoElement = document.getElementById("videoElement");

changeColorButton.addEventListener("click", function() {
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
}

// Función para acceder a la cámara y mostrar el video en pantalla
function startCamera() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        videoElement.srcObject = stream;
      })
      .catch(function(error) {
        console.error("Error al acceder a la cámara: ", error);
      });
  } else {
    console.error("La API getUserMedia no está disponible en tu navegador.");
  }
}

// Iniciar la cámara cuando se carga la página
window.addEventListener("DOMContentLoaded", function() {
  startCamera();
});
