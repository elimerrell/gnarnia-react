const getResorts = () => {
  return fetch('https://mighty-cliffs-43940.herokuapp.com/api/v1/resorts')
  .then(response => response.json())
  .catch(error => console.error(error))
};

const BackendService = {
  getResorts
};

export default BackendService;