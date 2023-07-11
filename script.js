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

