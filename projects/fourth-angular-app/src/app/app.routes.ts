
import { Routes } from '@angular/router';


export const routes: Routes = [


    {   path :'list' ,
        pathMatch: 'full',
        loadComponent :() => {
            return import('./components/employee-list/employee-list.component').then((m) => m.EmployeeListComponent)
         }
    },
    
    {   path :'details' ,
        pathMatch: 'full',
        loadComponent :() => {
            return import('./components/employee-details/employee-details.component').then((m) => m.EmployeeDetailsComponent)
         }
    },
     
    {   path :'forms' ,
        pathMatch: 'full',
        loadComponent :() => {
            return import('./components/template-form/template-form.component').then((m) => m.TemplateFormComponent)
         }
    },
    {   path :'ReactiveForms' ,
        pathMatch: 'full',
        loadComponent :() => {
            return import('./components/reactive-form/reactive-form.component').then((m) => m.ReactiveFormComponent)
         }
    },
    {   path :'**' ,
        pathMatch: 'full',
        loadComponent :() => {
            return import('./components/page-not-found/page-not-found.component').then((m) => m.PageNotFoundComponent)
         }
    }
    
];
