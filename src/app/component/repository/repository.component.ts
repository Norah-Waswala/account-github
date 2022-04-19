import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/class/user';
import { Repository } from 'src/app/class/repository';
import { RepositoryService } from 'src/app/service/repository.service';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos:any=[];
  display:any=[]
  userName:any=[]
  user!: User ;
  users:any = []
  info:any=[]
  @Input()userRepos!: Repository
  constructor(private repositoryService:RepositoryService) { 
  this.repositoryService.getUserRepo().subscribe((repos)=>{
    console.log(repos)
    this.repos=repos
  });

}
    //   console.log(repos)
    //   this.repos=repos
  ngOnInit(): void {
  }
  findUser(){
    // this.display=false
  this.repositoryService.getRepos(this.userName).subscribe((Info)=>{
   
      this.info=Info
    })
    
}
  }
