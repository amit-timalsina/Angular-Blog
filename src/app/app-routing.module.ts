import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorComponent } from './author/author.component';
import { ArticlesComponent } from './articles/articles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
{path: 'articles', component: ArticlesComponent},
{path: 'author', component: AuthorComponent},
{path: '404', component: NotFoundComponent},
{path: '', component: ArticlesComponent},
{path: ':key', component: ArticleComponent},
{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
