import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from 'src/environments/environment';
// import { User } from './class/user';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private user: any;
  private userName:string;
  constructor(private http:HttpClient) {
this.userName='Norah-Waswala'
    
} 
getUserInfo(){
  return this.http.get('https://api.github.com/users/'+this.userName+`?acess_token=`+environment.apiKey)

}
    // searchuser(searchTerm:string): Observable<any>{
    //  return this.http.get<any>(
    //   "https://api.github.com/users/+'this.userName'")
    //  .subscribe((response:any)=>{
    //  console.log('search Data',response);
     
  };

 
