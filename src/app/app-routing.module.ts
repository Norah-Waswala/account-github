import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { RepositoryComponent } from './component/repository/repository.component';
import { UserComponent } from './component/user/user.component';
// import { UserComponent } from './component/user/user.component';
// import { RepositoryComponent } from './component/repository/repository.component';
const routes: Routes = [
  {path: 'user',component: UserComponent},
  {path: 'repository', component:RepositoryComponent},
  {path: '', component:MainComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[UserComponent,RepositoryComponent]