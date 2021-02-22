import { RegisterComponent } from './app-components/register/register.component';
import { LoginComponent } from './app-components/login/login.component';
import { ShellComponent } from './app-components/shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const movies = ()=>import('./modules/movies/movies.module').then(m=>m.MoviesModule);
const nasa = ()=> import ('./modules/nasa/nasa.module').then(n=>n.NasaModule);

const routes: Routes = [
  {path:'', component:ShellComponent,
  children:[
    {path:'nasa',loadChildren:nasa},
    {path:'movies',loadChildren:movies},
    {path:'', redirectTo:'nasa', pathMatch:'full'}
  ]
},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
