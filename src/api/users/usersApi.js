import { API_URL } from '../constants';


export const getAllUsers = (page) => {
  return fetch(`${API_URL}?results=10&page=${page}`)
	.then(res => res.json())
	.then(result => {
		return(result.results);
	})
}