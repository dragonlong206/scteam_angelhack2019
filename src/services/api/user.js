import axios from 'axios';

import { checkStatus, parseJSON } from '../fetchTools';
import apis from '../../config/apis';

// export const userSignIn = entity => {
//   return axios
//     .post(apis, entity)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => data)
//     .catch(error => Promise.reject(error));
// };
