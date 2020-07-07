import { NotFoundComponent } from './not-found/not-found.component';
import { ArticleService } from './article.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ArticlesComponent } from './articles/articles.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorComponent } from './author/author.component';
// import { NbThemeModule, NbSidebarComponent, NbLayoutModule, NbToggleModule } from '@nebular/theme';
// import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ArticleComponent } from './article/article.component';

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      ArticlesComponent,
      FooterComponent,
      AuthorComponent,
      ArticleComponent,
      NotFoundComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      // NbThemeModule.forRoot,
    // NbLayoutModule,
    // NbEvaIconsModule,
    // NbToggleModule,
    // NbSidebarComponent
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
