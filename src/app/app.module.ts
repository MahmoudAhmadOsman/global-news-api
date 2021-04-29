import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { StatesComponent } from './components/states/states.component';
import { BreadcrumbNavComponent } from './components/breadcrumb-nav/breadcrumb-nav.component';
import { HirshabelleComponent } from './components/hirshabelle/hirshabelle.component';
import { KoonfurGalbeedComponent } from './components/koonfur-galbeed/koonfur-galbeed.component';
import { JubalandComponent } from './components/jubaland/jubaland.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
 
import { CutBlogDescPipe } from './pipes/cut-blog-desc.pipe';
import { ShowLoadingComponent } from './components/show-loading/show-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    NewsDetailsComponent,
    UsersComponent,
    UserDetailsComponent,
    PodcastsComponent,
    FooterComponent,
    ContactComponent,
    StatesComponent,
    BreadcrumbNavComponent,
    HirshabelleComponent,
    KoonfurGalbeedComponent,
    JubalandComponent,
    BlogComponent,
    BlogDetailsComponent,
 
    CutBlogDescPipe,
 
    ShowLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
