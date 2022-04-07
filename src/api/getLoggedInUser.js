import axios from 'axios';
import { errorNotifier } from '../components/common/notificationHandler';
import { BASE_URL } from './useFetch';

export const getLoggedInUser = async (setLoggedInUser) => {
  try {
    const token = sessionStorage.getItem('11#221#');
    const {
      data: { user },
    } = await axios.get(`${BASE_URL}auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(user);
    setLoggedInUser(user);
  } catch (error) {
    console.log(error.response);
    errorNotifier(error.response);
  }
};
