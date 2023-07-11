//Funcion para cambiar color de fondo
const changeColorButton = document.getElementById("changeColorButton");

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

//Funcion con fetch
document.addEventListener('DOMContentLoaded', function() {
  var userTableBody = document.querySelector('#userTable tbody');

  fetch('https://api.example.com/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(function(data) {
      // Iterate over each user and create a table row
      data.forEach(function(user) {
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + user.id + '</td>' +
                        '<td>' + user.name + '</td>' +
                        '<td>' + user.email + '</td>';

        userTableBody.appendChild(row);
      });
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
});

