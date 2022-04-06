import axios from 'axios';
import { errorNotifier } from '../components/common/notificationHandler';
import { BASE_URL } from './useFetch';

export const getPosts = async (setPosts, setLoading) => {
  try {
    const token = localStorage.getItem('11#221#');
    setLoading(true);
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}products`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(data);
    setLoading(false);
    setPosts(data);
  } catch (error) {
    console.log(error.response);
    errorNotifier(error.response);
  }
};
