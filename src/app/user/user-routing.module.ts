import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpsertComponent } from './user-upsert/user-upsert.component';

const routes: Routes = [
  {path:'',redirectTo:'User-List',pathMatch:'full'},
  {path:'User-List',component:UserListComponent},
  {path:'User-Upsert/:id',component:UserUpsertComponent},
  {path:'User-Upsert',component:UserUpsertComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
