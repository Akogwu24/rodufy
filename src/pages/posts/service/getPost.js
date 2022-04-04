import { BASE_URL } from '../../../api/useFetch';
 // 'https://www.giropay.xyz/api/v1/giro-app/products'
export const getPosts = async (setPosts) => {
  try {
    const response = await fetch(BASE_URL + 'products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) throw Error('did not recieve the data');
    const res = await response.json();
    setPosts(res.data);
    console.log('repoo', res);
  } catch (error) {
    console.log(error.message);
  }
};
