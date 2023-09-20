const baseUrl = 'https://6508310a56db83a34d9be61b.mockapi.io/api';

const fetchCarPerPage = async (pageNumber, itemsPerPage) => {
  const response = await fetch(
    `${baseUrl}/carRent?page=${pageNumber}&limit=${itemsPerPage}`
  );
  const data = await response.json();
  return data;
};

const fetchAllCar = async () => {
  const response = await fetch(`${baseUrl}/carRent`);
  const data = await response.json();

  return data;
};

const api = {
  fetchCarPerPage,
  fetchAllCar,
};

export default api;
