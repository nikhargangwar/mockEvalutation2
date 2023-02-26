import axios from 'axios';
import { ERROR_ROUTE } from '../../constants/routesPaths';

const makeRequest = async ({ url, method, headers }, navigate, payload = {}) => {
  try {
    const { data } = await axios({
      method,
      url,
      payload,
      headers,
    });
    return data;
  } catch (e) {
    if (navigate) {
      const errorStatus = e.response?.status;

      if (errorStatus) {
        navigate(`${ERROR_ROUTE}/${errorStatus}`);
      } else {
        navigate(ERROR_ROUTE);
      }
    }
    return {};
  }
};

export default makeRequest;
