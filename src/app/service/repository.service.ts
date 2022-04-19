import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  user:any;
  userName:string ="Norah-Waswala"
  constructor(private http:HttpClient) { }
    getUserRepo(){
        return this.http.get('https://api.github.com/users/' + this.userName+`/repos`)
      }
      getRepos(users:any){
        let userRepo=
        this.http.get('https://api.github.com/users/' + this.userName+`/repos?acess_token=`+environment.apiKey)
        console.log(userRepo)
        return userRepo
      }
     
  }

