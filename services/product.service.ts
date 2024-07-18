import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  token:string='';
  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
  }

  getToken(token:string){
this.token = token;
  }
}
