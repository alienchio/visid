const changeColorButton = document.getElementById("changeColorButton");
const startCameraButton = document.getElementById("startCameraButton");
const videoElement = document.getElementById("videoElement");
let stream;

changeColorButton.addEventListener("click", function() {
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomColor();
});

startCameraButton.addEventListener("click", function() {
  startCamera();
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
}

function startCamera() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(mediaStream) {
        stream = mediaStream;
        videoElement.srcObject = stream;
      })
      .catch(function(error) {
        console.error("Error al acceder a la cámara: ", error);
      });
  } else {
    console.error("La API getUserMedia no está disponible en tu navegador.");
  }
}

// Detener la cámara cuando se cierra la página o se navega fuera de ella
window.addEventListener("beforeunload", function() {
  if (stream) {
    stream.getTracks().forEach(function(track) {
      track.stop();
    });
  }
});
