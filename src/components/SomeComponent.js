const apiUrl = 'https://localsphere.onrender.com';

// Use apiUrl in your fetch or axios calls
fetch(`${apiUrl}/categories`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

console.log('API URL:', process.env.REACT_APP_API_URL);