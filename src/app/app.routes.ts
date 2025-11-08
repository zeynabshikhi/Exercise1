import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { ContctPage } from './contct-page/contct-page';

export const routes: Routes = [
    {path:'home',component:HomePage},
    {path:'about',component:AboutPage},
    {path:'contact',component:ContctPage},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];
