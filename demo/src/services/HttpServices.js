import axios from "axios";
import assignIn from "lodash/assignIn";
export class HttpService {
  defaultAxiosConfig = {
    timeout: 0,
  };
  constructor(baseURL, config) {
    this.config = assignIn({}, this.defaultAxiosConfig, config, {
      baseURL
    });
    this.axiosInstance = axios.create(this.config);
    this.interceptor();
  }

  // 拦截 http 请求
  interceptor() {
    let interceptors = this.axiosInstance.interceptors;
    assignIn(interceptors, axios.interceptors);
    interceptors.request.use(config => {
      return config;
    }, error => {
      console.log('加载超时')
      return Promise.reject(error);
    });
    interceptors.response.use(response => {
      return response;
    }, error => {
      console.log('加载超时')
      return Promise.reject(error);
    });
  }
  get(url, config) {
    return this.axiosInstance.get(url, config);
  }

  post(url, data, config) {
    return this.axiosInstance.post(url, data, config);
  }
};