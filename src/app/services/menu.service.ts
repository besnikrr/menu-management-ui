import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Menu} from "../models/Menu";

const baseUrl = 'http://localhost:8080/api/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Menu[]> {
    return this.http.get<Menu[]>(baseUrl);
  }

  get(id: any): Observable<Menu> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: Menu): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  //
  // findByTitle(title: any): Observable<Menu[]> {
  //   return this.http.get<Menu[]>(`${baseUrl}?title=${title}`);
  // }
}
