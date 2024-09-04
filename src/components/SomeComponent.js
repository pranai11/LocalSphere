const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8008';
console.log('API URL:', apiUrl);

// Use apiUrl in your fetch or axios calls
fetch(`${apiUrl}/categories`)
  .then(response => {
    console.log('Response status:', response.status);
    return response.json();
  })
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });