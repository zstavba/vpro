import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodersRoutingModule } from './coders-routing.module';
import { PartnersComponent } from './partners/partners.component';
import { CodersHomeComponent } from './coders-home/coders-home.component';
import { CodersComponent } from './coders.component';
import { RouterModule } from '@angular/router';
import { CodersArticlesComponent } from './coders-articles/coders-articles.component';
import { CodersCommercialComponent } from './coders-commercial/coders-commercial.component';
import { CodersProductionComponent } from './coders-production/coders-production.component';
import { CreatePartnerComponent } from '../components/create-partner/create-partner.component';


@NgModule({
  declarations: [
    PartnersComponent,
    CodersHomeComponent,
    CodersComponent,
    CodersArticlesComponent,
    CodersCommercialComponent,
    CodersProductionComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class CodersModule { }
