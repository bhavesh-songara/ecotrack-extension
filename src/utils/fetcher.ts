import axios from "axios";

const fetcher = async (payload: {
  url: string;
  method?: string;
  data?: any;
  params?: any;
  headers?: any;
}) => {
  const { method = "GET", url, data, params, headers } = payload;
  try {
    const response = await axios({
      method,
      url,
      data,
      params,
      headers,
    });
    return {
      data: response.data,
      error: null,
    };
  } catch (error: any) {
    return {
      data: null,
      error: error?.response?.data,
    };
  }
};

export default fetcher;
