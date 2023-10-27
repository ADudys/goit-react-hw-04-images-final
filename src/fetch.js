export const getImages= async (query, page = 1)=> {
  const url = 'https://pixabay.com/api/';
  const API_KEY = '38310321-42cf4e8d1a5fc0af5b641205e';

  return await fetch(
    `${url}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
}