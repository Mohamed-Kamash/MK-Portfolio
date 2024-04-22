import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'about',pathMatch:'full',title:'About'},
    {path:'about',loadComponent:()=>import('./component/about/about.component').then((m)=>m.AboutComponent),title:'About'},
    {path:'resume',loadComponent:()=>import('./component/resume/resume.component').then((m)=>m.ResumeComponent),title:'Resume'},
    {path:'projects',loadComponent:()=>import('./component/projects/projects.component').then((m)=>m.ProjectsComponent),title:'Projects'},
];
