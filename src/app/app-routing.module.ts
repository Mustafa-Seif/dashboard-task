import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudienceComponent } from './components/audience/audience.component';
import { MainSectionComponent } from './components/main-section/main-section.component';

const routes: Routes = [
  {path:'', component:MainSectionComponent},
  {path:'audience',component:AudienceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
