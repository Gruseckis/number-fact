import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactPageComponent } from './fact-page/fact-page.component';
import { InputContainerComponent } from './input-container/input-container.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: InputContainerComponent
},
{
  path: ':id',
  pathMatch: 'full',
  component: FactPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
