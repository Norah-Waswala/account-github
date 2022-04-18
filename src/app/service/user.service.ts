import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
   user:any;
   userName:string ="Norah-Waswala"
  
   _url='https://api.github.com/users';
  updateProfile: any;
  constructor(private http:HttpClient) {
    console.log('lets get started')
  }
  
   
  getUserInfo():Observable<any>{
    return this.http.get(
      'https://api.github.com/users/' + this.userName)
      
      // console.log(this.user)
    }
   
 
  getUsers(){
    return this.http.get<any[]>(this._url);
  }
  getProfileInfo(){
    return this.http.get( 'https://api.github.com/users/' + this.userName+`?acess_token=`+environment.apiKey)
  }
  getUserRepo(){
    return this.http.get('https://api.github.com/users/' + this.userName+`/repos`)
  }
  getRepos(users:any){
    let userRepo=
    this.http.get('https://api.github.com/users/' + this.userName+`/repos?acess_token=`+environment.apiKey)
    console.log(userRepo)
    return userRepo
  }
 
//  getInitialRepos(repos: any[]){
//     return this.http.get(`${environment.API_URL}/users/blancc-page/repos?sort=created`);
  // }
  updateUsername(userName:string){
    this.userName=userName
  }
  }
  

