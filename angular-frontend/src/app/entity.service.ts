import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EntityService {
  private baseURL: string = "http://localhost:5000/response";


  constructor(private http: HttpClient){}

  public getResponse(query: string){
    let data = {
      query : query,
      
    }
    
    return this.http.post<any>(`${this.baseURL}`, data)
    // .subscribe(res => {
    //   console.log(res)
    //   return res
    // })
  } 
  
}
