export const getApiResponseHelper = (url) => (
  fetch(url)
    .then(response => response.json())
    .then(response => response)
);