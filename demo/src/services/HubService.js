import { HttpService } from './HttpServices';

class HubService {
  constructor() {
    this.http = new HttpService('http://localhost:3000');
  }
}

class Home extends HubService {
  constructor() {
    super();
    this.controller = "/api";
  }
  getAll() {
    return this.http.get(`${this.controller}/GetAll`);
  }
}
export const homeService = new Home();