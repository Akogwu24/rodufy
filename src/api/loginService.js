import axios from 'axios';
import { BASE_URL } from './useFetch';
import {
  errorNotifier,
  successNotifier,
} from '../components/common/notificationHandler';

export const login = async (values, setIsLoading) => {
  setIsLoading(true);
  console.log(values, 'vvvv');
  try {
    const response = await axios.post(`${BASE_URL}auth/login`, values);
    console.log('fffffffff', response);
    response.success && successNotifier('Logged in Successfully');
    const token = response?.data?.token;
    localStorage.setItem('11#221#', token);

    localStorage.setItem('55#555#', values.email);

    window.location.href = '/posts';
    setIsLoading(false);
  } catch (error) {
    console.log(error.response);
    if (!error?.response) {
      errorNotifier('No server Response');
    } else if (error.response.status === 401) {
      errorNotifier('Unauthorized');
    }
    errorNotifier(error.response.data.Error);
    setIsLoading(false);
  }
};
