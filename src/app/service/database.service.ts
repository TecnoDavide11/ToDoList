import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor( private http : HttpClient) { }

  FirebaseURL="https://todolist-2aee5-default-rtdb.asia-southeast1.firebasedatabase.app/lista.json"

  Url2="https://todolist-2aee5-default-rtdb.asia-southeast1.firebasedatabase.app/lista"

  insertValore(body:{}){
    return this.http.post(this.FirebaseURL, body)
  }

  getValore(){
    return this.http.get(this.FirebaseURL)
  }

  deleteValore(idFIrebase:string){
    return this.http.delete(`${this.Url2}/${idFIrebase}.json`)
  }
}
