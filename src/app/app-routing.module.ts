import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { UserComponent } from './component/user/user.component';
// import { RepositoryComponent } from './component/repository/repository.component';
const routes: Routes = [
  // {path: 'user',component: UserComponent},
  // {path: 'repository', component:RepositoryComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
