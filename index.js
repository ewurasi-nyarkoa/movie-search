fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => console.log(json))