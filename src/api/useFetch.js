// import { useEffect, useState } from 'react';
// import axios from 'axios';

export const BASE_URL = 'https://www.giropay.xyz/api/v1/giro-app/';

// export default function useFetch(`${BASE_URL}${url}`) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async function () {
//       try {
//         setLoading(true);
//         const response = await axios.get(url);
//         setData(response.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [url]);

//   return { data, error, loading };
// }
