import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';
import { DashnoardHomeComponent } from './dashboard/dashnoard-home/dashnoard-home.component';
import { DashNavbarComponent } from './dashboard/components/dash-navbar/dash-navbar.component';
import { ArticleComponent } from './dashboard/article/article.component';
import { CommandPaleteComponent } from './dashboard/components/command-palete/command-palete.component';
import { CreateRoleComponent } from './dashboard/components/create-role/create-role.component';
import {MatStepLabel, MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* ANGULAR Material Components  */
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

/* Froala Editor   */
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ArticleHomeComponent } from './dashboard/article/article-home/article-home.component';
import { ArticleFabricComponent } from './dashboard/article/article-fabric/article-fabric.component';
import { ArticleFleeceComponent } from './dashboard/article/article-fleece/article-fleece.component';
import { ArticleFibersComponent } from './dashboard/article/article-fibers/article-fibers.component';
import { CreateDnComponent } from './dashboard/components/create-dn/create-dn.component';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChatBarComponent } from './dashboard/components/chat-bar/chat-bar.component';
import { CodersComponent } from './dashboard/coders/coders.component';
import { CodersRoutingModule } from './dashboard/coders/coders-routing.module';
import { CreatePartnerComponent } from './dashboard/components/create-partner/create-partner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    DashnoardHomeComponent,
    DashNavbarComponent,
    ArticleComponent,
    CommandPaleteComponent,
    CreateRoleComponent,
    ArticleHomeComponent,
    ArticleFabricComponent,
    ArticleFleeceComponent,
    ArticleFibersComponent,
    CreateDnComponent,
    ChatBarComponent,
    CreatePartnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
