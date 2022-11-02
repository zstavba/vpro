import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CodersComponent } from './coders/coders.component';
import { DashboardComponent } from './dashboard.component';
import { DashnoardHomeComponent } from './dashnoard-home/dashnoard-home.component';

const routes: Routes = [
  {
    path: "",
    component: DashnoardHomeComponent
  },
  {
    path: "article",
    component: ArticleComponent,
    loadChildren: () => import('./article/routing.module').then((m) => m.RoutingModule)
  },
  {
    path: "coders",
    component: CodersComponent,
    loadChildren: () => import("./coders/coders-routing.module").then((m) => m.CodersRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingRoutingModule { }
