import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleFabricComponent } from './article-fabric/article-fabric.component';
import { ArticleFibersComponent } from './article-fibers/article-fibers.component';
import { ArticleFleeceComponent } from './article-fleece/article-fleece.component';
import { ArticleHomeComponent } from './article-home/article-home.component';

const routes: Routes = [
  {
    path: "",
    component: ArticleHomeComponent
  },
  {
    path: "fabric",
    component: ArticleFabricComponent
  },
  {
    path: "fibers",
    component: ArticleFibersComponent
  },
  {
    path: "fleece",
    component: ArticleFleeceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
