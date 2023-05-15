

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stuff } from '../stuff';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {


constructor(private http: HttpClient) { }

  public get(url:string):Observable<any>{
    return this.http.get(url);
  }

  public sendData(url:string,newStuff:stuff){

      console.log(newStuff);
      return this.http.post(url,newStuff);

  }

  public update(url:string,newStuff:stuff){

    console.log(newStuff);
    return this.http.put(url + newStuff.id,newStuff);

  }

  public delete(url:string,id:number):Observable<any>{

    return this.http.delete(url+id);

  }

}


//  https://rickandmortyapi.com/api/character/1,83


