
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
     
    {   path :'**' ,
        pathMatch: 'full',
        loadComponent :() => {
            return import('./components/page-not-found/page-not-found.component').then((m) => m.PageNotFoundComponent)
         }
    }
    
];
