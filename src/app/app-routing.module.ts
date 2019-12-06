import { NgModule, RenderComponentType } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterPage } from './home/register/register.page';
import { welcomRoutingModule } from './home/welcome/welcome-routing.module';
import { WelcomeModule } from './home/welcome/welcome.module';
import { FinishModule } from './home/finish/finish.module';

const routes: Routes = [
  
  { path: 'register', redirectTo: 'registerform', pathMatch: 'full' },

  {
    path: 'register',
    loadChildren: () => import('./home/register/register.module').then( m => m.RegisterPageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./home/login/login.module').then( m => m.LoginPageModule)
  }
  
  ,{
    path:'welcome',
    loadChildren:()=> import('./home/welcome/welcome.module').then( m => WelcomeModule)
  },
  {
    path:'finish',
    loadChildren:()=> import('./home/finish/finish.module').then(m => FinishModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}