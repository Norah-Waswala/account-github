import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/class/user';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service'
import { Repository } from 'src/app/class/repository';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  profile: any = [];
  repos:any=[];
  info:any=[]
  userName:any=[]
  display:any=[]
  user!: User ;
  users:any = [];
  @Output()infoOutput=new EventEmitter<any>()
  userRepos=new Repository()
  constructor(private userService:UserService) {
   this.userService.getUserInfo().subscribe((users => {
    //  console.log(users)
      this.users=users;

    }));
    
    // this.userService.getUserRepo().subscribe((repos)=>{
      
    //   console.log(repos)
      // this.repos=repos

    // })
  }
  ngOnInit(): void {
  }
  
findUser(){
  // this.display=false
  this.userService.updateProfile(this.userName);
  this.userService.getProfileInfo().subscribe((users)=>{
    console.log(users)
    this.users=users
  })
  // this.userService.getRepos(this.userName).subscribe((repos)=>{
   
  //   this.repos=repos
  // })
  // this.userService.getProfileInfo().subscribe((Info)=>{
  //   this.infoOutput.emit(this.userRepos)
  //   this.info=Info
  // })
  

  }
}
    


