import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { TodosComponent } from './components/todos/todos.component';
import { RegistrationComponent } from './components/registration/registration.component'


const routes: Routes = [{
  path: '',
  redirectTo: "/loginPage",
  pathMatch: 'full'
},
{
  path: "loginPage", component: LoginPageComponent
},
{
  path: "todoList", component: TodoPageComponent
},
{ path: "registration", component: RegistrationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
