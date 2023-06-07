import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable} from "rxjs";
import {Login, LoginResp} from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  // @ts-ignore
  login(login: Login): Observable<LoginResp> {
    let headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post<LoginResp>("http://localhost:8000/login", login, {headers})
  }
}
