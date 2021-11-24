import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntervalComponent } from './interval/interval.component';

const routes: Routes = [
  {path: "", component: IntervalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
