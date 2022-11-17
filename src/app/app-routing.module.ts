import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DigitalNotesComponent } from './components/digital-notes/digital-notes.component';
import { LoggedInGuard } from './auth/guards/logged-in.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'notes',
    component: DigitalNotesComponent,
    canActivate: [LoggedInGuard],
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
