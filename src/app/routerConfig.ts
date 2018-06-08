
import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { SubmitComponent } from './components/submit/submit.component';

import { FormsListComponent } from './components/forms-list/forms-list.component';
import { SubmissionsComponent } from './components/submissions/submissions.component';

export const appRoutes: Routes = [
  { path: 'create', 
    component: CreateComponent 
  },
  {
    path: 'submit/:id',
    component: SubmitComponent
  },
  {
    path: 'submissions/:id',
    component: SubmissionsComponent
  },
  { path: 'index',
    component: FormsListComponent
  },
  { path: '',
    component: FormsListComponent
  }
];