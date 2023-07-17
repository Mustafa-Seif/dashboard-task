import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudienceComponent } from './components/audience/audience.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { TestGridComponent } from './components/test-grid/test-grid.component';

const routes: Routes = [
  {path:'', component:MainSectionComponent},
  {path:'audience',component:AudienceComponent},
  {path:'test',component:TestGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
