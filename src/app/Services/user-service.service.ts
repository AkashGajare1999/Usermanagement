import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl = environment.BaseUrl;
  constructor(private httpclient: HttpClient) { }

  getAllUsers() {
    return this.httpclient.get(this.baseUrl + 'User').pipe(map((Resultvalue) => { return Resultvalue; }))
  }

  deleteUser(id: any) {
    return this.httpclient.delete(this.baseUrl + `User/${id}`).pipe(map((Resultvalue) => { return Resultvalue; }))
  }

  getUser(Id: any) {
    return this.httpclient.get(this.baseUrl + `User/${Id}`).pipe(map((resultValue) => { return resultValue }));
  }
  AddUser(data:any)
  {
    return this.httpclient.post(this.baseUrl + `User`,data).pipe(map((resultValue) => { return resultValue }));

  }
  updateUser(Id:any,data:any)
  {
    return this.httpclient.put(this.baseUrl + `User/${Id}`,data).pipe(map((resultValue) => { return resultValue }));

  }
}
