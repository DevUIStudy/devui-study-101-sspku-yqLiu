import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DefualtComponent } from './defualt/defualt.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {
    path: "admin", component: AdminComponent
  },
  {
    path: "404", component: DefualtComponent
  },
  {
    path: '**', component: DefualtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
