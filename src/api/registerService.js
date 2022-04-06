import axios from 'axios';
import { BASE_URL } from './useFetch';
import {
  errorNotifier,
  successNotifier,
} from '../components/common/notificationHandler';

export const registerUser = async (values, setIsLoading, navigate) => {
  setIsLoading(true);
  console.log(values, 'vvvv');
  try {
    const response = await axios.post(`${BASE_URL}auth/register`, values);
    console.log('fffffffff', response);
    response.status === 200 && successNotifier(response.data.data.data);
    setIsLoading(false);
    navigate('/login');
  } catch (error) {
    console.log(error.response);
    // this is because of the error message being retuned. i dont think it is appropriate to display such message to a user
    error.response.status === 400
      ? errorNotifier()
      : errorNotifier(error.response.data.Error);
    setIsLoading(false);
  }
};

// try {
//   const response = await fetch(`${BASE_URL}auth/register`, {
//     method: 'POST',
//     body: JSON.stringify({ ...values }),
//     headers: { 'Content-type': 'application/json' },
//   });
//   if (!response.ok) {
//     const error = `An error has occured: ${response.status} - ${response.statusText}`;
//     throw new Error(error);
//   }
//   const data = await response.json();
//   console.log(data);
//   setIsLoading(false);
//   successNotifier(data?.data?.data);
//   timeoutSetter(() => navigate('/login'), 3000);
// } catch (error) {
//   console.log(error, 'error');
//   errorNotifier(error);
//   setIsLoading(false);
// }
