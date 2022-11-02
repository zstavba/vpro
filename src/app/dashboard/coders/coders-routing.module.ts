import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CreatePartnerComponent } from '../components/create-partner/create-partner.component';
import { CodersArticlesComponent } from './coders-articles/coders-articles.component';
import { CodersCommercialComponent } from './coders-commercial/coders-commercial.component';
import { CodersHomeComponent } from './coders-home/coders-home.component';
import { CodersProductionComponent } from './coders-production/coders-production.component';
import { CodersComponent } from './coders.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
    path: "",
    component: CodersHomeComponent
  },
  {
    path: "partners",
    component: PartnersComponent
  },
  {
    path: "articles",
    component: CodersArticlesComponent
  },
  {
    path: "commercial",
    component: CodersCommercialComponent
  },
  {
    path: "production",
    component: CodersProductionComponent
  }
];

@NgModule({
  declarations:[
    CodersComponent,
    CodersHomeComponent,
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CodersRoutingModule { }
