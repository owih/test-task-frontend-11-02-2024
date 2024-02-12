import axios from 'axios';

class Api {
  constructor() {
    this.base = import.meta.env.VITE_BACKEND_URL;
  }

  async request(method, path, data) {
    const url = this.base + path;

    try {
      if (method === 'get' || method === 'delete') {
        return await axios[method](url);
      } else {
        return await axios[method](url, data);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      throw error;
    }
  }
}

export default new Api();
